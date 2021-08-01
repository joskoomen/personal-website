@extends('layout.app')

@section('title')
    My Site
@endsection

@section('page-title')
    Jos Koomen
@endsection

@section('body')
    <div class="info">{!! $info !!}</div>
    @foreach($posts as $post)
        @component('partials.post', [
            'title'=> $post['title'],
            'date'=> $post['date'],
            'body'=> $post['body'],
        ])@endcomponent
    @endforeach
@endsection
