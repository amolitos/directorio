<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::create(['name' => 'llevar litigios']);
        Service::create(['name' => 'colitigar']);
        Service::create(['name' => 'consultoria juridica general']);
        Service::create(['name' => 'asesoria juridica general']);
        Service::create(['name' => 'asesoria de asuntos a distancia']);
        Service::create(['name' => 'desahogo de exhortos o despachos']);
        Service::create(['name' => 'designacion de domicilio procesal']);
        Service::create(['name' => 'recepcion de notificaciones y documentos en domicilio procesal']);
        Service::create(['name' => 'gestion de asuntos en general']);
        Service::create(['name' => 'capacitacion profesional presencial']);
        Service::create(['name' => 'capacitacion profesional a distancia']);
        Service::create(['name' => 'impartir curso, conferencias, etc.']);
        Service::create(['name' => 'docencia']);
    }
}
