data = {
    "Meta Data": {
        "1. Information": "Intraday (5min) open, high, low, close prices and volume",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2021-02-19 18:45:00",
        "4. Interval": "5min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
    },
    "Time Series (5min)": {
        "2021-02-19 18:45:00": {
            "1. open": "119.1800",
            "2. high": "119.1800",
            "3. low": "119.1800",
            "4. close": "119.1800",
            "5. volume": "1250"
        },
        "2021-02-19 18:25:00": {
            "1. open": "119.1000",
            "2. high": "119.1000",
            "3. low": "119.1000",
            "4. close": "119.1000",
            "5. volume": "701"
        },
        "2021-02-19 16:45:00": {
            "1. open": "118.9900",
            "2. high": "118.9900",
            "3. low": "118.9800",
            "4. close": "118.9800",
            "5. volume": "547"
        },
        "2021-02-19 16:40:00": {
            "1. open": "118.9600",
            "2. high": "118.9600",
            "3. low": "118.9600",
            "4. close": "118.9600",
            "5. volume": "300"
        }
    }
}

# my_arr = []
# data01 = []
# for key, val in data.items():
#     my_arr.append(val)

# for key, val in my_arr[1].items():
#     data01.append(val)

# for i in data01:
#     print(float(i['2. high']), float(i['3. low']), int(i['5. volume']))
   
#print(data01[0])

my_arr = [val for key, val in data.items()]
print(my_arr[0]['1. Information'])
#data01 = [val for key, val in my_arr[1].items()]
# for i in data01:
#     print(i['2. high'], i['3. low'], i['5. volume'])
