@extends('layout.app')

@section('title')
    About me
@endsection

@section('page-title')
    About me
@endsection

@section('body')
    {!! $intro !!}
    @component('partials.picture', [
        'gif'=>$picture['gif'],
        'webm'=>$picture['webm'],
        'width'=>300,
        'alt'=>'About Me'
        ])@endcomponent
    {!! $work_history !!}
@endsection

