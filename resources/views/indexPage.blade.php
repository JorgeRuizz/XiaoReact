<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ URL::asset('fonts/Bubbleboddy.ttf') }}" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;0,400;0,500;0,700;1,300&display=swap" rel="stylesheet">
        
        <style type="text/css">
            *{
                font-family: 'Roboto Mono', monospace;
            }
        </style>
    </head>
    <body class="antialiased">
       <div id="Menu">
       </div>
       <div id="HomeContainer">
       </div>
       <script src="{{mix('js/app.js')}}"></script>
        <script src="https://kit.fontawesome.com/c17113d732.js" crossorigin="anonymous"></script>

    </body>
</html>
