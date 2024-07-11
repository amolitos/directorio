<?php

namespace Database\Seeders;

use App\Models\PlanFeature;
use Illuminate\Database\Seeder;

class PlanFeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PlanFeature::insert([
            [
                'plan_id' => 1,
                'description' => 'Crear tu perfil con tus datos de servicio profesional.',
                'order' => 1,
            ],
            [
                'plan_id' => 1,
                'description' => 'Subir logotipo de marca o photo de perfil.',
                'order' => 2,
            ],
            [
                'plan_id' => 1,
                'description' => 'Sin información de contacto.',
                'order' => 3,
            ],
            [
                'plan_id' => 1,
                'description' => 'Buscar a otros abogados en todo México.',
                'order' => 4,
            ],
            [
                'plan_id' => 2,
                'description' => 'Todos los beneficios del plan gratuito.',
                'order' => 1,
            ],
            [
                'plan_id' => 2,
                'description' => 'Servicio de Marketing digital.',
                'order' => 2,
            ],
            [
                'plan_id' => 2,
                'description' => 'Posicionamiento SEO en tu perfil.',
                'order' => 3,
            ],
            [
                'plan_id' => 2,
                'description' => 'Medidas ciberseguridad y rastreo de quienes te contactan.',
                'order' => 4,
            ],
            [
                'plan_id' => 2,
                'description' => 'Acceso para subir tu Video, Reel o Stories, promocionales.',
                'order' => 5,
            ],
            [
                'plan_id' => 2,
                'description' => 'Botón de contacto directo a tu WhatsApp.',
                'order' => 6,
            ],
            [
                'plan_id' => 2,
                'description' => 'VALIDACIÓN DE CÉDULA PROFESIONAL.',
                'order' => 7,
            ],
            [
                'plan_id' => 2,
                'description' => 'INSIGNIA DE LEGITIMIDAD Y CONFIANZA.',
                'order' => 8,
            ],
            [
                'plan_id' => 2,
                'description' => 'Agenda digital para control de actividades con recordatorio.',
                'order' => 9,
            ],
            [
                'plan_id' => 2,
                'description' => 'Vinculación directa a tus redes sociales.',
                'order' => 10,
            ],
            [
                'plan_id' => 3,
                'description' => 'Todos los beneficios del plan Legal Market.',
                'order' => 1,
            ],

            [
                'plan_id' => 3,
                'description' => 'Publicidad pagada en redes sociales.',
                'order' => 2,
            ],
            [
                'plan_id' => 3,
                'description' => 'Estrategias de Marketing para atraer clientes.',
                'order' => 3,
            ],

            [
                'plan_id' => 3,
                'description' => 'Oficina virtual para asesorías jurídicas o reuniones de trabajo a distancia.',
                'order' => 4,
            ],
            [
                'plan_id' => 3,
                'description' => 'Acceso VIP al AULA VIRTUAL denominada “MENTES MAESTRAS”.',
                'order' => 5,
            ],
            [
                'plan_id' => 3,
                'description' => 'Acceso a la selecta Comunidad Jurídica Digital “MENTES MAESTRAS”, para recibir contenido jurídico de alto valor.',
                'order' => 6,
            ],
            [
                'plan_id' => 3,
                'description' => 'Acceso a la MENTORÍA de actualización jurisprudencial/legal.',
                'order' => 7,
            ],
            [
                'plan_id' => 3,
                'description' => 'Acceso a todos los eventos de capacitación legal organizados por el Directorio Nacional de Abogados, con destacados PONENTES ESPECIALISTAS.',
                'order' => 8,
            ],
            [
                'plan_id' => 3,
                'description' => 'Difusión de marca personal con tarjeta digital de presentación.',
                'order' => 9,
            ],
            [
                'plan_id' => 3,
                'description' => 'Adiestramiento en habilidades digitales.',
                'order' => 10,
            ],
        ]);
    }
}
