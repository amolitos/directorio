@props([
    'id',
    'label',
    'type' => 'text',
    'value' => null,
    'max' => 0,
    'required' => true
])

<div {{ $attributes->merge(['class' => '']) }}>
    <label for="{{ $id }}" class="form-label">
        {{ $label }}
    </label>
    <input
        id="{{ $id }}"
        name="{{ $id }}"
        type="{{ $type }}"
        value="{{ old($id, $value) }}"
        @if($max > 0) maxlength="{{ $max }}" @endif
        @if($required) required @endif
        class="form-input"
    >
    @error($id)
        <p class="form-error">
            {{ $message }}
        </p>
    @enderror
</div>
