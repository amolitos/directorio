@props([
    'id',
    'label',
    'required' => true
])

<div {{ $attributes->merge(['class' => '']) }}>
    <label for="{{ $id }}" class="form-label">
        {{ $label }}
    </label>
    <div data-js-input-password class="relative">
        <input
            id="{{ $id }}"
            name="{{ $id }}"
            type="password"
            @if($required) required @endif
            class="form-input pr-10"
        >
        <div class="flex absolute inset-y-0 right-0 items-center cursor-pointer pr-4">
            <i class="fa-solid fa-eye-slash text-gray-500"></i>
        </div>
    </div>
    @error($id)
        <p class="text-xs text-red-500 mt-1">
            {{ $message }}
        </p>
    @enderror
</div>
