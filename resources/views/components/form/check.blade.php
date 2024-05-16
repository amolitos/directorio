@props([
    'id',
    'checked' => false,
    'required' => true
])

<div {{ $attributes->merge(['class' => 'flex items-center']) }}>
    <input
        id="{{ $id }}"
        name="{{ $id }}"
        type="checkbox"
        @if($checked) checked @endif
        @if($required) required @endif
        class="form-check"
    >
    <label for="{{ $id }}" class="form-label ml-2 mb-0">
        {{ $slot }}
    </label>
</div>
