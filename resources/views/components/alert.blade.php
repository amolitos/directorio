<div
    x-data="{ open: true }"
    x-show="open"
    x-transition:enter.duration.200ms
    x-transition:leave.duration.350ms
    role="alert"
    {{ $attributes->merge(['class' => 'alert']) }}>
    <span class="grow">
        {{ $slot }}
    </span>
    <button @click="open = false" type="button">
        <span class="sr-only">Close</span>
        <i class="fa-solid fa-xmark text-base"></i>
    </button>
</div>
