@props([
    'id',
    'label',
    'required' => true
])

<div {{ $attributes->merge(['class' => '']) }}>
    <label for="{{ $id }}" class="form-label">
        {{ $label }}
    </label>
    <select
        id="{{ $id }}"
        name="{{ $id }}"
        @if($required) required @endif
        class="form-input">
        {{ $slot }}
    </select>
    @error($id)
        <p class="form-error">
            {{ $message }}
        </p>
    @enderror
</div>
