<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.Laravel = { csrfToken: 'csrf_token() ' }
    </script>
    <title> Online Ordering System </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="plugins/datatable/dataTables.bootstrap.min.css">
</head>

<body>
    <div id="app">
        <Dashboard :user-id='@json(auth()->user()->id)' :user-name='@json(auth()->user()->name)'>
        </Dashboard>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
