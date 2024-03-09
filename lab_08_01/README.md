# Laboratorio Módulo 8.1 - Bucles => 
## Software Hospitalario ([TypeScript](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_08_01/src/main.ts))

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie se operaciones sobre una lista de pacientes.

## Apartado 1

### a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

````JavaScript
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesPediatria : Pacientes[] = [];
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            pacientesPediatria.push(pacientes[i]);
        }
    }
    return pacientesPediatria;
};
````


### b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

````JavaScript
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesPediatria : Pacientes[] = [];
    for ( let i = 0; i < pacientes.length; i++) {
        // También se puede utilizar la lista obtenida anteriormente y solo comprobar la edad
        if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10 ){
            pacientesPediatria.push(pacientes[i]);
        }
    }
    return pacientesPediatria;
};
````

## Apartado 2

### c) Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

````JavaScript
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39){
            // El return ya activa como break
            return true;
        }
    }
    return false;
};
````
## Apartado 3

### d.1) El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

````JavaScript
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            pacientes[i].especialidad = "Medico de familia";
        }
    }
    return pacientes;
};
````

### (SI QUEREMOS HACERLA INMUTABLE)
````JavaScript
const reasignaPacientesAMedicoFamiliaInmutable = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesReasignadosMedicoFamilia : Pacientes[] = [];
    for ( let i = 0; i < pacientes.length; i++){
        pacientesReasignadosMedicoFamilia[i] = {...pacientes[i]}
        if(pacientes[i].especialidad === "Pediatra"){
            pacientesReasignadosMedicoFamilia[i].especialidad = "Medico de familia";
        }
    }
    return pacientesReasignadosMedicoFamilia;
};
````

## Apartado 4

### e) Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados comprobar si en la lista hay algún paciente asignado a pediatría
````JavaScript
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            return true;
        }
    }
    return false;
};
````
## Apartado OPCIONAL

### Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
````JavaScript
interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const listaPorEspecialidad : NumeroPacientesPorEspecialidad =
    {medicoDeFamilia: 0, pediatria: 0, cardiologia: 0};

    for ( let i = 0; i < pacientes.length; i++) {
        switch(pacientes[i].especialidad){
            case "Cardiólogo":
                listaPorEspecialidad.cardiologia += 1;
                break;
            case "Medico de familia":
                listaPorEspecialidad.medicoDeFamilia += 1;
                break;
            case "Pediatra":
                listaPorEspecialidad.pediatria += 1;
                break;
        }
    }

    return listaPorEspecialidad;
};
````