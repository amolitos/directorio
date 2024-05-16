@props([
    'id',
    'label',
    'rows' => 3,
    'required' => true,
    'class' => null
])

<div {{ $attributes->merge(['class' => '']) }}>
    <label for="{{ $id }}" class="form-label">
        {{ $label }}
    </label>
    <textarea
        id="{{ $id }}"
        name="{{ $id }}"
        rows="{{ $rows }}"
        @if($required) required @endif
        class="form-input"
    >{{ old($id, $slot) }}</textarea>
    @error($id)
        <p class="form-error">
            {{ $message }}
        </p>
    @enderror
</div>
