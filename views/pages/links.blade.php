@extends('layout.app')

@section('title')
    Links
@endsection

@section('page-title')
    Links
@endsection

@section('body')
    <article class="generic links">
        @foreach($links as $link)
        @component('partials.link', [
            'picture'=> $link['picture'],
            'link'=> $link['link'],
            'title'=> $link['title'],
            'caption'=> $link['caption'],
        ])@endcomponent
        @endforeach
@endsection
