from django.shortcuts import render
from empatica_dashboard.models import Download
from django.http import HttpResponse
import datetime
from django.http import JsonResponse
from empatica_dashboard.models import WorldBorder
from django.db.models.functions import TruncMonth, TruncDay
from django.db.models import Count
from datetime import date, timedelta
from operator import itemgetter
import random

#RANDOM Downloads
# for i in range(1, 100):
#     if (random.randint(0, 1) == 0):
#         app_id = 'IOS_ALERT'
#     else:
#         app_id = 'IOS_MATE'
#     Download(latitude=random.randint(42, 52), longitude=random.randint(0, 27), app_id=app_id).save()


# returns today`s downloads statistics
def todays_statistics(request):
    today_min = datetime.datetime.combine(datetime.date.today(), datetime.time.min)
    today_max = datetime.datetime.combine(datetime.date.today(), datetime.time.max)
    todays_number_of_downloads = Download.objects.filter(downloaded_at__range=[today_min, today_max]).count()
    todays_morning_downloads = Download.objects.filter(downloaded_at__range=[today_min, today_max],
                                                       downloaded_at__hour__range=[0, 11]).count()
    todays_afternoon_downloads = Download.objects.filter(downloaded_at__range=[today_min, today_max],
                                                         downloaded_at__hour__range=[12, 17]).count()
    todays_evening_downloads = Download.objects.filter(downloaded_at__range=[today_min, today_max],
                                                       downloaded_at__hour__range=[18, 19]).count()
    todays_night_downloads = Download.objects.filter(downloaded_at__range=[today_min, today_max],
                                                     downloaded_at__hour__range=[20, 23]).count()
    return HttpResponse(JsonResponse({'total': todays_number_of_downloads, 'morning': todays_morning_downloads,
                                      'afternoon': todays_afternoon_downloads,
                                      'evening': todays_evening_downloads, 'night': todays_night_downloads}))


# returns todays downloads
def todays_downloads(request):
    today_min = datetime.datetime.combine(datetime.date.today(), datetime.time.min)
    today_max = datetime.datetime.combine(datetime.date.today(), datetime.time.max)
    todays_number_of_downloads = Download.objects.filter(downloaded_at__range=[today_min, today_max])[:50]
    result = []
    for download in todays_number_of_downloads:
        result.append({'app_id': download.app_id, 'lat': download.latitude, 'lng': download.longitude})
    return HttpResponse(JsonResponse(result, safe=False))


def time_of_day_statistics(request):
    try:
        from_date_parameter = request.GET.get('from_date', '')
        from_date = datetime.datetime.combine(datetime.datetime.strptime(from_date_parameter, "%Y-%m-%d").date(),
                                              datetime.time.min)
    except:
        from_date = datetime.datetime.combine(datetime.date(year=2017, day=1, month=3), datetime.time.min)

    try:
        to_date_parameter = request.GET.get('to_date', '')
        to_date = datetime.datetime.combine(datetime.datetime.strptime(to_date_parameter, "%Y-%m-%d").date(),
                                            datetime.time.min)
    except:
        to_date = datetime.datetime.combine(datetime.date(year=2017, day=1, month=3), datetime.time.min)

    # get downloads from 'from_date' to 'to_date'
    # gets morning downloads from 00:00:00 to 11:59:59 and groups them by day
    morning_downloads = Download.objects.filter(downloaded_at__gte=from_date, downloaded_at__lte=to_date,
                                                downloaded_at__hour__range=[0, 11]) \
        .annotate(date=TruncDay('downloaded_at')).values('date').annotate(number_of_downloads=Count('id')).values(
        'date',
        'number_of_downloads')
    # gets afternoon downloads from 12:00:00 to 17:59:59 and groups them by day
    afternoon_downloads = Download.objects.filter(downloaded_at__gte=from_date, downloaded_at__lte=to_date,
                                                  downloaded_at__hour__range=[12, 17]) \
        .annotate(date=TruncDay('downloaded_at')).values('date').annotate(number_of_downloads=Count('id')).values(
        'date',
        'number_of_downloads')
    # gets evening downloads from 18:00:00 to 19:59:59 and groups them by day
    evening_downloads = Download.objects.filter(downloaded_at__hour__range=[18, 19]) \
        .annotate(date=TruncDay('downloaded_at')).values('date').annotate(number_of_downloads=Count('id')).values(
        'date',
        'number_of_downloads')
    # gets evening downloads from 20:00:00 to 23:59:59 and groups them by day
    night_downloads = Download.objects.filter(downloaded_at__hour__range=[20, 23]) \
        .annotate(date=TruncDay('downloaded_at')).values('date').annotate(number_of_downloads=Count('id')).values(
        'date',
        'number_of_downloads')

    # date difference between 'from_date' and 'to_date'
    delta = to_date - from_date

    result = {'data': [], 'dates': []}  # the resulting array
    m_index = 0  # current position in the morning_downloads array
    a_index = 0  # current position in the afternoon_downloads array
    e_index = 0  # current position in the evening_downloads array
    n_index = 0  # current position in the night_downloads array

    # statistics for every part of the day ('data' will contain arrays of ['date_in_ms','number_of_downloads_for_this_part_of_the_day']
    morning_downloads_statistics = ({'name': 'Morning', 'data': []})
    afternoon_downloads_statistics = ({'name': 'Afternoon', 'data': []})
    evening_downloads_statistics = ({'name': 'Evening', 'data': []})
    night_downloads_statistics = ({'name': 'Night', 'data': []})

    # loop every day from 'from_date' to 'to_date'
    for i in range(delta.days + 1):
        date = from_date + timedelta(days=i)

        result['dates'].append(date.strftime('%d %b %Y'))

        # initialize the number of downloads to 0 for every part of the day
        morning_downloads_statistics['data'].append(0)
        afternoon_downloads_statistics['data'].append(0)
        evening_downloads_statistics['data'].append(0)
        night_downloads_statistics['data'].append(0)

        # checks if there are morning downloads on this day and sets them if there are
        if m_index < len(morning_downloads) and date.day == morning_downloads[m_index]['date'].day and date.month == \
                morning_downloads[m_index]['date'].month and date.year == morning_downloads[m_index]['date'].year:
            morning_downloads_statistics['data'][-1] = morning_downloads[m_index][
                'number_of_downloads']  # sets the number of downloads on this day
            m_index += 1  # updates the current position in the morning downloads array

        # checks if there are afternoon downloads on this day and sets them if there are
        if a_index < len(afternoon_downloads) and date.day == afternoon_downloads[a_index]['date'].day and date.month == \
                afternoon_downloads[a_index]['date'].month and date.year == afternoon_downloads[a_index]['date'].year:
            afternoon_downloads_statistics['data'][-1] = afternoon_downloads[a_index]['number_of_downloads']
            a_index += 1

        # checks if there are evening downloads on this day and sets them if there are
        if e_index < len(evening_downloads) and date.day == evening_downloads[e_index]['date'].day and date.month == \
                evening_downloads[e_index]['date'].month and date.year == evening_downloads[e_index]['date'].year:
            evening_downloads_statistics['data'][-1] = evening_downloads[e_index]['number_of_downloads']
            e_index += 1
        # checks if there are night downloads on this day and sets them if there are
        if n_index < len(night_downloads) and date.day == night_downloads[n_index]['date'].day and date.month == \
                night_downloads[n_index]['date'].month and date.year == night_downloads[n_index]['date'].year:
            night_downloads_statistics['data'][-1] = night_downloads[n_index]['number_of_downloads']
            n_index += 1

    result['data'].append(morning_downloads_statistics)
    result['data'].append(afternoon_downloads_statistics)
    result['data'].append(evening_downloads_statistics)
    result['data'].append(night_downloads_statistics)

    return HttpResponse(JsonResponse(result, safe=False),
                        content_type="application/json")


# returns download statistics based on app_id ('IOS_MATE' or 'IOS_ALERT') for the past year
def app_id_statistics(request):
    now = datetime.datetime.now()
    from_date = datetime.datetime.combine(datetime.datetime(year=now.year - 1, day=1, month=now.month),
                                          datetime.time.min)
    to_date = datetime.datetime.combine(datetime.date.today(), datetime.time.max)

    ios_mate_downloads = Download.objects.filter(downloaded_at__gte=from_date, downloaded_at__lte=to_date,
                                                 app_id__exact='IOS_MATE') \
        .annotate(date=TruncMonth('downloaded_at')).values('date').annotate(number_of_downloads=Count('id')).values(
        'date',
        'number_of_downloads')

    ios_alert_downloads = Download.objects.filter(downloaded_at__gte=from_date, downloaded_at__lte=to_date,
                                                  app_id__exact='IOS_ALERT') \
        .annotate(date=TruncMonth('downloaded_at')).values('date').annotate(number_of_downloads=Count('id')).values(
        'date',
        'number_of_downloads')

    result = {'data': [], 'dates': []}
    ios_mate_downloads_statistics = {'name': 'IOS_MATE', 'data': []}
    ios_alert_downloads_statistics = {'name': 'IOS_APP', 'data': []}

    delta = diff_month(to_date, from_date)
    mate_index = 0
    alert_index = 0

    year = from_date.year
    for i in range(delta + 1):
        month = (from_date.month + i) % 12

        if (month == 0):
            month = 12
        if (month == 1):
            year += 1

        date = datetime.datetime(year, month, 1)

        ios_mate_downloads_statistics['data'].append(0)
        ios_alert_downloads_statistics['data'].append(0)

        result['dates'].append(date.strftime('%b %Y'))

        if mate_index < len(ios_mate_downloads) and date.month == ios_mate_downloads[mate_index][
            'date'].month and date.year == ios_mate_downloads[mate_index]['date'].year:
            ios_mate_downloads_statistics['data'][-1] = ios_mate_downloads[mate_index]['number_of_downloads']
            mate_index += 1
            # checks if there are night downloads on this day and sets them if there are
        if alert_index < len(ios_alert_downloads) and date.month == \
                ios_alert_downloads[alert_index]['date'].month and date.year == ios_alert_downloads[alert_index][
            'date'].year:
            ios_alert_downloads_statistics['data'][-1] = ios_alert_downloads[alert_index]['number_of_downloads']
            alert_index += 1

    result['data'].append(ios_mate_downloads_statistics)
    result['data'].append(ios_alert_downloads_statistics)

    return HttpResponse(JsonResponse(result, safe=False), content_type="application/json")


# returns downloads for top 15 countries
def top_countries_statistics(request):
    try:
        from_date_parameter = request.GET.get('from_date', '')
        from_date = datetime.datetime.combine(datetime.datetime.strptime(from_date_parameter, "%Y-%m-%d").date(),
                                              datetime.time.min)
    except:
        from_date = datetime.datetime.combine(datetime.date(year=2017, day=1, month=3), datetime.time.min)

    try:
        to_date_parameter = request.GET.get('to_date', '')
        to_date = datetime.datetime.combine(datetime.datetime.strptime(to_date_parameter, "%Y-%m-%d").date(),
                                            datetime.time.min)
    except:
        to_date = datetime.datetime.combine(datetime.datetime.today(), datetime.time.min)

    result = {'countries': [], 'data': []}
    countries_query_set = WorldBorder.objects.all()
    downloads_by_country = {'name': "Downloads by country", 'data': []}

    for country in countries_query_set:
        result['countries'].append(country.name)
        downloads_by_country['data'].append(0)
    result['countries'].append(
        'Other')  # added 'Other' because United Kingdom`s multiPolygon (geom property in world.models) is wrong :(
    downloads_by_country['data'].append(0)
    result['countries'] = result['countries']

    downloads = Download.objects.filter(downloaded_at__gte=from_date, downloaded_at__lte=to_date)
    for download in downloads:
        if download.country_id != -1:
            downloads_by_country['data'][download.country_id] += 1
        else:
            downloads_by_country['data'][-1] += 1  # increase the number of downloads for 'Other'

    result['data'] = downloads_by_country
    print(downloads_by_country)

    return HttpResponse(JsonResponse(result, safe=False), content_type="application/json")


# calculates the difference between two dates (in months)
def diff_month(d1, d2):
    return (d1.year - d2.year) * 12 + d1.month - d2.month
