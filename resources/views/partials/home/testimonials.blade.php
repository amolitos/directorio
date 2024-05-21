<section class="container p-5 md:p-10">
    <h3 class="font-bold text-3xl md:text-4xl text-secondary dark:text-neutral-100 text-center">
        ¿Qué opinan otros abogados?
    </h3>
    <p class="font-medium md:text-lg text-neutral-400 text-center mt-5">
        Nos reconocen como la mejor opción
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:mt-10">
        <x-testimonial name="Juan Carlos Martínez">
            Encontré justo el abogado que necesitaba gracias a esta plataforma. La comunicación fue fluida y
            profesional. Sin duda, una excelente herramienta para quienes buscan asesoramiento legal.
        </x-testimonial>
        <x-testimonial name="María Fernanda López">
            La plataforma es increíblemente fácil de usar y me conectó con un abogado especializado en tiempo récord.
            Resolví mi problema legal rápidamente y sin complicaciones. ¡Muy recomendable!
        </x-testimonial>
        <x-testimonial name="José Luis Hernández">
            Me sorprendió la eficiencia de esta plataforma. En minutos, tenía varias opciones de abogados calificados.
            El proceso fue sencillo y los resultados fueron excepcionales.
        </x-testimonial>
        <x-testimonial name="Ana Sofía García">
            Excelente servicio y una interfaz muy amigable. Pude consultar con un abogado experto sin salir de casa.
            ¡Definitivamente volveré a usar esta plataforma en el futuro!
        </x-testimonial>
    </div>
    <a href="{{ route('search') }}" class="btn btn-primary block w-fit mt-8 md:mt-14 mx-auto py-3 md:py-5 px-5 md:px-6">
        BUSCAR ABOGADO
    </a>
</section>
