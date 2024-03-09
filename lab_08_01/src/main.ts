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
    let pacientesPediatria : Pacientes[] = [];
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            pacientesPediatria.push(pacientes[i]);
        }
    }
    return pacientesPediatria;
};
const pacientesPediatria : Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);


// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
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
const pacientesPediatriaMenorDiezAnios : Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesPediatriaMenorDiezAnios);


// c) Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco
// superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39){
            // El return ya activa como break
            return true;
        }
    }
    return false;
};
console.log(activarProtocoloUrgencia(pacientes));

// d.1) (MUTABLE) El pediatra no puede atender hoy a los pacientes, queremos reasignar
// los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            pacientes[i].especialidad = "Medico de familia";
        }
    }
    return pacientes;
};
const pacientesReasignadosMedicoFamilia = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignadosMedicoFamilia)

// d.2) (INMUTABLE)
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
//const newPacientesReasignadosMedicoFamilia = reasignaPacientesAMedicoFamiliaInmutable(pacientes);
//console.log(newPacientesReasignadosMedicoFamilia)


// e) Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados)
// comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for ( let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra"){
            return true;
        }
    }
    return false;
};
console.log(HayPacientesDePediatria(pacientes));

// (OPCIONAL) Queremos calcular el número total de pacientes que están asignados
// a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

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
const listaPorEspecialidad = cuentaPacientesPorEspecialidad(pacientes);
console.log(listaPorEspecialidad);