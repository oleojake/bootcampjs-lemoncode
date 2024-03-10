# Laboratorio Módulo 8.2 - Array Methods => 
## Software Hospitalario ([TypeScript](https://github.com/oleojake/bootcampjs-lemoncode/blob/main/lab_08_02/src/main.ts))

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie se operaciones sobre una lista de pacientes.

***USAREMOS ARRAY METHODS EN LUGAR DE BUCLES***

## Apartado 1

### a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
### *USAMOS FILTER*

````JavaScript
const pacientesPediatria : Pacientes[] = pacientes.filter(
        (paciente : Pacientes) : boolean => paciente.especialidad === "Pediatra"
    );
````


### b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
### *USAMOS FILTER*

````JavaScript
const pacientesPediatria : Pacientes[] = pacientes.filter(
        (paciente : Pacientes) : boolean => paciente.edad < 10 
    );
// Si usamos la lista anterior ya no comprobamos si es de Pediatría
````

## Apartado 2

### c) Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
### *USAMOS SOME*

````JavaScript
const hayPacientesEnUrgencia : boolean = pacientes.some(
        (paciente : Pacientes) : boolean => paciente.temperatura > 39
        && paciente.frecuenciaCardiaca > 100
    );
````
## Apartado 3

### d) El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
### *USAMOS MAP*

````JavaScript
const pacientesReasignados : Pacientes[] = pacientes.map(
        (paciente : Pacientes) : Pacientes => {
            return {
                ...paciente,
                especialidad: "Medico de familia"
            }
        }
    );
````

## Apartado 4

### e) Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados comprobar si en la lista hay algún paciente asignado a pediatría
### *USAMOS EVERY*

````JavaScript
const pacientesNoPediatria : boolean = pacientes.every(
        (paciente : Pacientes) => paciente.especialidad !== "Pediatra"
    );
````
## Apartado OPCIONAL

### Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

````JavaScript
interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}
````

### OPCIÓN 1 usar FOREACH
Es la aproximación más cercana a usar bucles, solo eliminamos el uso del for habitual.


````JavaScript
const cuentaPacientesPorEspecialidadForEach = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const listaPorEspecialidad : NumeroPacientesPorEspecialidad =
    {medicoDeFamilia: 0, pediatria: 0, cardiologia: 0};

    pacientes.forEach(
        (paciente : Pacientes) => {
            switch(paciente.especialidad){
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
    );
    return listaPorEspecialidad;
};
````

### OPCIÓN 2 usar FILTER
Creo que es una alternativa donde el código se lee de manera muy clara, pero tenemos que crear 3 arrays auxiliares y hacer uso de **.length**

````JavaScript
const cuentaPacientesPorEspecialidadFilter = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    
    const pacientesMedicoFamilia : Pacientes[] = pacientes.filter (
        (paciente : Pacientes) => paciente.especialidad === "Medico de familia"
    );
    const pacientesPediatria : Pacientes[] = pacientes.filter (
        (paciente : Pacientes) => paciente.especialidad === "Pediatra"
    );
    const pacientesCardiologia : Pacientes[] = pacientes.filter (
        (paciente : Pacientes) => paciente.especialidad === "Cardiólogo"
    );
        
    const listaPorEspecialidad : NumeroPacientesPorEspecialidad =
    {medicoDeFamilia: pacientesMedicoFamilia.length, pediatria: pacientesPediatria.length, cardiologia: pacientesCardiologia.length};   

    return listaPorEspecialidad;
};
````

### OPCIÓN 3 usar REDUCE
Puede parecer el código más complejo pero asignamos directamente las variables del objeto *NumeroPacientesPorEspecialidad* sin necesidad de arrays auxiliares.

````JavaScript
const cuentaPacientesPorEspecialidadReduce = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

    const listaPorEspecialidad : NumeroPacientesPorEspecialidad =
    {medicoDeFamilia: 0, pediatria: 0, cardiologia: 0}; 
    
    listaPorEspecialidad.medicoDeFamilia =  pacientes.reduce (
        (acumulado: number, paciente : Pacientes) : number => {
            if(paciente.especialidad === "Medico de familia"){
                acumulado ++;
            }
            return acumulado;
        },
        0
    );

    listaPorEspecialidad.pediatria =  pacientes.reduce (
        (acumulado: number, paciente : Pacientes) : number => {
            if(paciente.especialidad === "Pediatra"){
                acumulado ++;
            }
            return acumulado;
        },
        0
    );

    listaPorEspecialidad.cardiologia =  pacientes.reduce (
        (acumulado: number, paciente : Pacientes) : number => {
            if(paciente.especialidad === "Cardiólogo"){
                acumulado ++;
            }
            return acumulado;
        },
        0
    );

    return listaPorEspecialidad;
};
````