type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatria : Pacientes[] = pacientes.filter(
        (paciente : Pacientes) : boolean => paciente.especialidad === "Pediatra"
    );
    return pacientesPediatria;
};
const pacientesPediatria : Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);


// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
// Como usamos la lista anterior ya no comprobamos si es de Pediatría
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatria : Pacientes[] = pacientes.filter(
        (paciente : Pacientes) : boolean => paciente.edad < 10 
    );
    return pacientesPediatria;
};
const pacientesPediatriaMenorDiezAnios : Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientesPediatria); 
console.log(pacientesPediatriaMenorDiezAnios);


// c) Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco
// superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Pacientes[]) : boolean => {
    const hayPacientesEnUrgencia : boolean = pacientes.some(
        (paciente : Pacientes) : boolean => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100
    );
    return hayPacientesEnUrgencia
};
console.log(activarProtocoloUrgencia(pacientes));



// d) El pediatra no puede atender hoy a los pacientes, queremos reasignar
// los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesReasignados : Pacientes[] = pacientes.map(
        (paciente : Pacientes) : Pacientes => {
            return {
                ...paciente,
                especialidad: "Medico de familia"
            }
        }
    );
    return pacientesReasignados;
};
const pacientesReasignadosMedicoFamilia = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignadosMedicoFamilia)



// e) Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados)
// comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Pacientes[]) : boolean => {
    const pacientesNoPediatria : boolean = pacientes.every(
        (paciente : Pacientes) => paciente.especialidad !== "Pediatra"
    );
    return pacientesNoPediatria;
};
// Si lo hacemos con la lista anterior donde hemos asignado a Médico de Familia, devuelve true.
console.log(HayPacientesDePediatria(pacientesReasignadosMedicoFamilia));


// (OPCIONAL) Queremos calcular el número total de pacientes que están asignados
// a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

// CON FOREACH EN LUGAR DE FOR
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
let listaPorEspecialidad = cuentaPacientesPorEspecialidadForEach(pacientes);
console.log(listaPorEspecialidad);

// CON FILTER
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
listaPorEspecialidad = cuentaPacientesPorEspecialidadFilter(pacientes);
console.log(listaPorEspecialidad);


// CON REDUCE evitamos el uso de length y nuevos arrays
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
listaPorEspecialidad = cuentaPacientesPorEspecialidadReduce(pacientes);
console.log(listaPorEspecialidad);