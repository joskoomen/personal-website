<figure class="center">
    <a href="{{$link['url']}}" target="{{$link['target']}}" rel="{{$link['rel']}}">
        @component('partials.picture', [
            'gif'=>$picture['gif'],
            'webm'=>$picture['webm'],
            'width'=>$picture['width'],
            'alt'=>$title
        ])@endcomponent
    </a>
    <figcaption>{!! $caption !!}</figcaption>
</figure>
