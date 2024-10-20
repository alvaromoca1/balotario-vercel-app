'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ConfettiComponent from './Confetti';

interface Question {
  pregunta: string;
  alternativas: string[];
  correcta: number;
  solucion: string;
}

const quizData: Question[] = [
  {
    "pregunta": "¿Cuál de las siguientes sanciones se aplica al servidor público que transgrede los principios éticos de la función pública y que mantiene vínculo laboral con una Entidad pública? Señale la alternativa correcta.",
    "alternativas": [
      "Despido y amonestación.",
      "Despido, amonestación y resolución contractual.",
      "Despido y resolución contractual.",
      "Amonestación y resolución contractual."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Despido y amonestación'. Según la página 37 del PDF, las sanciones aplicables a personas que mantienen vínculo laboral son: amonestación, suspensión temporal hasta por un año, y destitución o despido."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe actuar con rectitud, honradez y honestidad, procurando satisfacer el interés general y desechando todo provecho o ventaja personal, obtenido por sí o por interpósita persona:",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Idoneidad.",
      "Probidad."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Probidad'. En la página 32 del PDF, se define el principio de Probidad como 'Rectitud, honradez y honestidad, busca interés general y no ventaja personal'."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe propender a una formación sólida acorde a la realidad, capacitándose permanentemente para el debido cumplimiento de sus funciones:",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Idoneidad.",
      "Probidad."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Idoneidad'. En la página 32 del PDF, se define el principio de Idoneidad como 'Condición o aptitud para ejercicio de la función pública'."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe adecuar su conducta hacia el respeto de la Constitución y las Leyes, garantizando que en todas las fases del proceso de toma de decisiones o en el cumplimiento de los procedimientos administrativos, se respeten los derechos a la defensa y al debido procedimiento:",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Idoneidad.",
      "Veracidad."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Respeto'. En la página 32 del PDF, se define el principio de Respeto como 'Adecuación de conducta hacia cumplimiento de normas'."
  },
  {
    "pregunta": "Es el deber de la Función Pública que señala que el Servidor Público debe actuar con absoluta imparcialidad política, económica o de cualquier otra índole en el desempeño de sus funciones demostrando independencia a sus vinculaciones con personas, partidos políticos o instituciones:",
    "alternativas": [
      "Transparencia.",
      "Discreción.",
      "Responsabilidad.",
      "Neutralidad."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Neutralidad'. En la página 33 del PDF, se define el deber de Neutralidad como 'Imparcialidad en el desempeño de sus funciones'."
  },
  {
    "pregunta": "Cuando se señala que el Servidor Público está prohibido de mantener relaciones o de aceptar situaciones en cuyo contexto sus intereses personales, laborales, económicos o financieros pudieran estar en conflicto con el cumplimento de los deberes y funciones a su cargo, nos estamos refiriendo a la Prohibición Ética de la Función Pública:",
    "alternativas": [
      "Obtener ventajas indebidas.",
      "Mantener intereses de conflicto.",
      "Hacer mal uso de información privilegiada.",
      "Realizar actividades de proselitismo político."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Mantener intereses de conflicto'. En la página 34 del PDF, se define esta prohibición como 'Aceptar situaciones donde intereses personales entren en conflicto con cumplimiento de deberes y funciones a cargo'."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe expresarse con autenticidad en las relaciones funcionales con todos los miembros de su institución y con la ciudadanía, y contribuye al esclarecimiento de los hechos:",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Veracidad.",
      "Idoneidad."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Veracidad'. En la página 32 del PDF, se define el principio de Veracidad como 'Autenticidad con miembros de institución y ciudadanía. Esclarece los hechos'."
  },
  {
    "pregunta": "Es el deber de la Función Pública que señala que el Servidor Público debe guardar reserva respecto de hechos o informaciones de los que tenga conocimiento con motivo o en ocasión del ejercicio de sus funciones, sin perjuicio de los deberes y las responsabilidades que le correspondan en virtud de las normas que regulan el acceso y la transparencia de la información pública:",
    "alternativas": [
      "Transparencia.",
      "Discreción.",
      "Responsabilidad.",
      "Neutralidad."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Discreción'. En la página 33 del PDF, se define el deber de Discreción como 'Guarda reserva de información. Responsable del acceso a información pública'."
  },
  {
    "pregunta": "Cuando se señala que el Servidor Público está prohibido de participar en transacciones u operaciones financieras utilizando información privilegiada de la entidad a la que pertenece o que pudiera tener acceso a ella por su condición o ejercicio del cargo que desempeña, ni debe permitir el uso impropio de dicha información para el beneficio de algún interés, nos estamos refiriendo a la Prohibición Ética de la Función Pública:",
    "alternativas": [
      "Obtener ventajas indebidas.",
      "Mantener intereses de conflicto.",
      "Hacer mal uso de información privilegiada.",
      "Realizar actividades de proselitismo político."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Hacer mal uso de información privilegiada'. En la página 34 del PDF, se define esta prohibición como 'Participar en transacciones financieras utilizando información privilegiada de la entidad, así como uso impropio para beneficio propio'."
  },
  {
    "pregunta": "Son principios del Código de Ética de la Función Pública:",
    "alternativas": [
      "Neutralidad",
      "Responsabilidad",
      "Transparencia",
      "Lealtad y Obediencia"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Neutralidad'. En la página 32 del PDF, se lista 'Neutralidad' como uno de los principios del Código de Ética de la Función Pública."
  },
  {
    "pregunta": "No es deber del Código de Ética de la Función Pública:",
    "alternativas": [
      "Neutralidad",
      "Discreción",
      "Veracidad",
      "Ejercicio Adecuado del Cargo"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Neutralidad'. En la página 33 del PDF, 'Neutralidad' se lista como un principio, no como un deber del Código de Ética de la Función Pública."
  },
  {
    "pregunta": "La prohibición de 'mantener intereses en conflicto' está referida a:",
    "alternativas": [
      "Obtener o procurar beneficios o ventajas indebidas, para sí o para otros, mediante el uso de su cargo, autoridad, influencia o apariencia de influencia.",
      "No constituye una prohibición",
      "Mantener relaciones o aceptar situaciones en cuyo contexto sus intereses personales, laborales, económicos o financieros pudieran estar en conflicto con el cumplimiento de los deberes y funciones a su cargo.",
      "Ejercer presiones, amenazas o acoso sexual contra otros servidores públicos o subordinados que puedan afectar la dignidad de la persona o inducir a la realización de acciones dolosas"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Mantener relaciones o aceptar situaciones en cuyo contexto sus intereses personales, laborales, económicos o financieros pudieran estar en conflicto con el cumplimiento de los deberes y funciones a su cargo'. En la página 34 del PDF, se define esta prohibición de manera similar."
  },
  {
    "pregunta": "Señale la alternativa correcta en la que se elabora los siguientes instrumentos de gestión para la Planificación Estratégica de una Municipalidad Distrital: 1.Plan de Desarrollo Local Concertado, 2.Plan Estratégico Institucional, 3.Plan Estratégico de Desarrollo Nacional.",
    "alternativas": [
      "3,1,2",
      "3,2,1",
      "1,3,2",
      "1,2,3"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es '3,1,2'. En la página 13 del PDF, se muestra la cadena de planes estratégicos para los Gobiernos Regionales y Locales, que sigue el orden: PEDN (Plan Estratégico de Desarrollo Nacional) - PDRC/PDLC (Plan de Desarrollo Regional/Local Concertado) - PEI (Plan Estratégico Institucional)."
  },
  {
    "pregunta": "Señale la alternativa correcta en la que se elabora los siguientes instrumentos de gestión para la Planificación Estratégica de un Gobierno Regional: 1.Plan Estratégico Institucional, 2.Plan de Desarrollo Regional Concertado 3.Plan Estratégico de Desarrollo Nacional.",
    "alternativas": [
      "3,1,2",
      "3,2,1",
      "1,3,2",
      "1,2,3"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es '3,2,1'. En la página 13 del PDF, se muestra la cadena de planes estratégicos para los Gobiernos Regionales y Locales, que sigue el orden: PEDN (Plan Estratégico de Desarrollo Nacional) - PDRC/PDLC (Plan de Desarrollo Regional/Local Concertado) - PEI (Plan Estratégico Institucional)."
  },
  {
    "pregunta": "Señale la alternativa correcta en la que se elabora los siguientes instrumentos de gestión para la Planificación Estratégica del INEI: 1.PEI, 2.PESEM, 3.POI.",
    "alternativas": [
      "3,1,2",
      "3,2,1",
      "1,3,2",
      "2,1,3"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es '2,1,3'. En la página 12 del PDF, se muestra la cadena de planes estratégicos para los sectores y sus Organismos Públicos Adscritos, que sigue el orden: PEDN - PESEM - PEI - POI."
  },
  {
    "pregunta": "Relacione: 1.PEDN, 2.PESEM y 3.PDRC; a) Gobierno Regional, b) Gobierno Nacional, c) Ministerio.",
    "alternativas": [
      "1-a); 2-c); 3-b)",
      "1-b); 2-c); 3-a)",
      "1-c); 2-a); 3-b)",
      "1-c); 2-b); 3-a)"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es '1-b); 2-c); 3-a)'. Según las páginas 12 y 13 del PDF, el PEDN (Plan Estratégico de Desarrollo Nacional) corresponde al nivel nacional, el PESEM (Plan Estratégico Sectorial Multianual) a los ministerios, y el PDRC (Plan de Desarrollo Regional Concertado) a los gobiernos regionales."
  },
  {
    "pregunta": "Relacione: 1.PEI; 2.PESEM y 3.PDLC; a) INEI, b) Municipalidad, c) MINSA.",
    "alternativas": [
      "1-a); 2-c); 3-b)",
      "1-b); 2-c); 3-a)",
      "1-c); 2-a); 3-b)",
      "1-c); 2-b); 3-a)"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es '1-a); 2-c); 3-b)'. Según las páginas 12 y 13 del PDF, el PEI (Plan Estratégico Institucional) corresponde a entidades como el INEI, el PESEM (Plan Estratégico Sectorial Multianual) a ministerios como el MINSA, y el PDLC (Plan de Desarrollo Local Concertado) a las municipalidades."
  },
  {
    "pregunta": "Relacione: 1.PEDN, 2.POI y 3.PESEM; a) JNE, b) CEPLAN, c) MINCETUR.",
    "alternativas": [
      "1-a); 2-c); 3-b)",
      "1-b); 2-c); 3-a)",
      "1-b); 2-a); 3-c)",
      "1-c); 2-b); 3-a)"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es '1-b); 2-a); 3-c)'. Según las páginas 12 y 13 del PDF, el PEDN (Plan Estratégico de Desarrollo Nacional) corresponde al CEPLAN, el"
  },
  {
    "pregunta": "De los siguientes elementos señale la secuencia respecto al Plan Estratégico Institucional concordante con la Política Nacional de Modernización de la Gestión Pública: 1 Fase Análisis Prospectivo se revisa el diagnostico causal de las variables estratégicas. 2 Fase Estratégica es el elemento articulador con otros sistemas administrativos 3 Fase Institucional permite tener como resultado la aprobación del Plan Estratégico Institucional.",
    "alternativas": [
      "1,2,3",
      "3,1,2",
      "2,3,1",
      "1,3,2"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es '1,2,3'. En la página 14 del PDF, se muestra el diagrama de las fases del proceso de planeamiento estratégico, que sigue el orden: Fase de Análisis Prospectivo, Fase Estratégica, Fase Institucional."
  },
  {
    "pregunta": "¿Cuál de los siguientes no es un deber ético de la Función Pública que todo Servidor Público debe tener en cuenta en su actuar?",
    "alternativas": [
      "Justicia y equidad",
      "Discreción",
      "Responsabilidad",
      "Uso adecuado de los bienes del estado"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Justicia y equidad'. En las páginas 32-33 del PDF, 'Justicia y equidad' se lista como un principio, no como un deber del Código de Ética de la Función Pública."
  },
  {
    "pregunta": "¿Cuál de los elementos del Plan Estratégico Institucional se define como un conjunto de actividades ordenadas que contribuyen al logro de un objetivo que involucran el uso de recursos, y que cuentan con una unidad de medida y meta física determinada? Señale la alternativa correcta:",
    "alternativas": [
      "Las acciones estratégicas institucionales",
      "La visión",
      "La misión",
      "Los objetivos estratégicos institucionales"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Las acciones estratégicas institucionales'. En la página 15 del PDF, se define las acciones estratégicas como 'Conjunto de actividades ordenadas que contribuyen al logro de un objetivo estratégico institucional y que involucran el uso de recursos. Asimismo, cuentan con unidad de medida y meta determinada'."
  },
  {
    "pregunta": "En el Plan Operativo Institucional de la Dirección de Turismo de un Gobierno Regional se establece como objetivo institucional 'Promocionar los destinos turísticos de la Región'; al respecto el Área Usuaria responsable del cumplimiento de ese objetivo requiere en su Cuadro de Necesidades la contratación del Servicio de producción de videos de promoción de atractivos turísticos, y la adquisición de buses para turismo. Al respecto señale la alternativa correcta.",
    "alternativas": [
      "El requerimiento para contratar el servicio de producción de videos está vinculado al objetivo estratégico institucional, pero la adquisición de buses para turismo no está vinculado a dicho objetivo.",
      "Tanto el requerimiento para contratar el servicio de producción de videos como el requerimiento para adquirir buses para turismo está vinculado al objetivo estratégico institucional.",
      "El requerimiento para contratar el servicio de producción de videos y el requerimiento para adquirir buses para turismo no están vinculados al objetivo estratégico institucional.",
      "El requerimiento para adquirir buses para turismo está vinculado al objetivo estratégico institucional, pero el requerimiento para contratar el servicio de producción de videos no está."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'El requerimiento para contratar el servicio de producción de videos está vinculado al objetivo estratégico institucional, pero la adquisición de buses para turismo no está vinculado a dicho objetivo'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre la vinculación entre el Plan Operativo Institucional y los objetivos estratégicos en las páginas 12-15."
  },
  {
    "pregunta": "En el Plan Operativo Institucional de la Dirección de Educación de un Gobierno Regional se establece como objetivo institucional 'Reducir las dificultades de aprendizaje a los estudiantes de educación básica especial'. Al respecto, el Área Usuaria responsable del cumplimiento de ese objetivo requiere en su cuadro de necesidades la contratación del diseño y elaboración de material didáctico y la adquisición de mobiliario escolar. Al respecto señale la alternativa correcta.",
    "alternativas": [
      "El requerimiento para contratar el diseño y elaboración de material didáctico está vinculado al objetivo estratégico institucional, pero el requerimiento para adquirir mobiliario escolar no está vinculado a dicho objetivo",
      "Tanto el requerimiento para contratar el diseño y elaboración de materiales didáctico, como el requerimiento para adquirir mobiliario escolar están vinculados al objetivo estratégico.",
      "El requerimiento para contratar el diseño y elaboración de material didáctico, y el requerimiento para adquirir uniformes escolares no están vinculados al objetivo estratégico institucional.",
      "El requerimiento para adquirir mobiliario escolar está vinculado a objetivo estratégico institucional pero el requerimiento para contratar el diseño y elaboración de material didáctico no está vinculado a dicho objetivo."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Tanto el requerimiento para contratar el diseño y elaboración de materiales didáctico, como el requerimiento para adquirir mobiliario escolar están vinculados al objetivo estratégico'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre la vinculación entre el Plan Operativo Institucional y los objetivos estratégicos en las páginas 12-15."
  },
  {
    "pregunta": "En un contrato de un servicio de digitalización de documentos suscritos por una Municipalidad Distrital, se establece como penalidad S/. 50.00 por cada día que utilice personal que no cuente con vestimenta formal.",
    "alternativas": [
      "La penalidad es proporcional, pero resulta subjetiva, lo que vulnera el principio ético de idoneidad.",
      "La penalidad es objetiva, pero resulta desproporcionada, lo que vulnera el principio ético de idoneidad.",
      "La penalidad es objetiva y proporcional con el objeto de la contratación, por lo que no vulnera ningún principio ético.",
      "La penalidad es desproporcionada y subjetiva, lo que vulnera el principio ético de idoneidad."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'La penalidad es objetiva, pero resulta desproporcionada, lo que vulnera el principio ético de idoneidad'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre los principios éticos en las páginas 32-34, donde se menciona la idoneidad como uno de los principios del Código de Ética de la Función Pública."
  },
  {
    "pregunta": "Un Funcionario no calcula bien la penalidad, la penalidad era de 30 mil y cobro solo 10 mil, tiene responsabilidad:",
    "alternativas": [
      "Administrativa y civil",
      "Civil",
      "Penal",
      "Administrativa, civil y penal"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Administrativa y civil'. En la página 28 del PDF, se explica que cuando un funcionario comete un error en el cálculo de una penalidad, incurre en responsabilidad administrativa y civil."
  },
  {
    "pregunta": "Un funcionario de una municipalidad tardó 40 días para realizar el pago al contratista que se otorgó la conformidad por la entrega de cámaras de video vigilancia, el cual la Municipalidad tuvo que pagar los intereses legales correspondientes. Señale la responsabilidad que asumiría el Funcionario.",
    "alternativas": [
      "La Municipalidad debe cobrar al funcionario el monto de los intereses legales pagados al contratista.",
      "La Municipalidad debe correr traslado al Ministerio Público para que realice las acciones legales correspondientes.",
      "La Municipalidad debe sancionar al funcionario iniciando un proceso administrativo.",
      "El funcionario no asume ninguna responsabilidad civil, ni penal, ni administrativo porque no está previsto en la ley de contrataciones del estado."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'La Municipalidad debe cobrar al funcionario el monto de los intereses legales pagados al contratista'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre responsabilidad civil de los funcionarios en la página 28."
  },
  {
    "pregunta": "¿Cuál de las siguientes no es una prohibición ética de la función pública? Señale la alternativa correcta.",
    "alternativas": [
      "Hacer mal uso de información privilegiada.",
      "Discreción.",
      "Ejercer acoso sexual con otros servidores públicos o subordinados.",
      "Obtener ventajas indebidas."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Discreción'. En la página 34 del PDF, se muestra que la discreción es un deber ético, no una prohibición ética de la función pública."
  },
  {
    "pregunta": "¿Cuál de las siguientes no es un principio ético que todo servidor público debe tener en cuenta? Señale la alternativa correcta.",
    "alternativas": [
      "Veracidad.",
      "Idoneidad.",
      "Justicia y equidad.",
      "Discreción."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Discreción'. En la página 32 del PDF, se muestra que la discreción es un deber ético, no un principio ético de la función pública."
  },
  {
    "pregunta": "En una licitación pública para la adquisición de material médico se declaró la nulidad del procedimiento porque se incluyó en las bases como factor de evaluación la experiencia del postor. Señale la alternativa correcta.",
    "alternativas": [
      "Se vulnero el principio ético de eficiencia y el principio ético de justicia y equidad del servidor público.",
      "No se vulnero ningún principio ético porque la experiencia del postor se puede considerar como factor de evaluación.",
      "Se vulnero el principio ético de eficiencia del servidor público.",
      "Se vulnero el principio ético de eficiencia, el principio ético de justicia y equidad, y el principio de veracidad del servidor público."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Se vulnero el principio ético de eficiencia del servidor público'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre los principios éticos en las páginas 32-34, donde se menciona la eficiencia como uno de los principios del Código de Ética de la Función Pública."
  },
  {
    "pregunta": "Una empresa prestadora de servicios de saneamiento debía aplicar una penalidad de S/. 100,000 por el retraso injustificado en la entrega de medidores de agua. Sin embargo, el funcionario responsable aplica por error una penalidad de S/. 70,000 ¿Qué responsabilidad asumiría el funcionario que calculo dicha penalidad?",
    "alternativas": [
      "Administrativa y civil",
      "Civil",
      "Penal",
      "Administrativa, civil y penal"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Administrativa y civil'. En la página 28 del PDF, se explica que cuando un funcionario comete un error en el cálculo de una penalidad, incurre en responsabilidad administrativa y civil."
  },
  {
    "pregunta": "Es el deber de la Función Pública que señala que el Servidor Público no debe adoptar represalia de ningún tipo o ejercer coacción alguna contra otros servidores públicos u otras personas:",
    "alternativas": [
      "Transparencia.",
      "Discreción.",
      "Ejercicio adecuado del cargo.",
      "Neutralidad."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Ejercicio adecuado del cargo'. En la página 33 del PDF, se define el deber de Ejercicio Adecuado del Cargo como 'No tomar represalias de ningún tipo o coacción'."
  },
  {
    "pregunta": "Es el deber de la Función Pública que señala que el Servidor Público debe proteger y conservar los bienes del Estado, debiendo utilizar los que le fueran asignados para el desempeño de sus funciones de manera racional, evitando su abuso, derroche o desaprovechamiento, sin emplear o permitir que otros empleen los bienes del Estado para fines particulares o propósitos que no sean aquellos para los cuales hubieran sido específicamente destinados:",
    "alternativas": [
      "Transparencia.",
      "Uso adecuado de los bienes del Estado.",
      "Ejercicio adecuado del cargo.",
      "Neutralidad."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Uso adecuado de los bienes del Estado'. En la página 33 del PDF, se define el deber de Uso Adecuado de los Bienes del Estado como 'Proteger y conservar recursos del Estado. Evitar derroche, abuso, desaprovechamiento, o uso para fines personales'."
  },
  {
    "pregunta": "Un servidor público no gestiona una solicitud de ampliación de plazo dentro de los diez (10) días hábiles, por lo que la Entidad no se pronuncia y el contratista da por aprobada su solicitud. Qué principio se ha vulnerado?",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Idoneidad.",
      "Probidad."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Eficiencia'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre los principios éticos en la página 32, donde se menciona la eficiencia como uno de los principios del Código de Ética de la Función Pública."
  },
  {
    "pregunta": "Los miembros del Comité elaboran mal las Bases del procedimiento de selección. Qué principio se ha vulnerado?",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Idoneidad.",
      "Probidad."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Idoneidad'. En la página 32 del PDF, se define el principio de Idoneidad como 'Condición o aptitud para ejercicio de la función pública'. Elaborar correctamente las Bases del procedimiento de selección requiere idoneidad en el desempeño de las funciones."
  },
  {
    "pregunta": "Correlacione: a) Define la razón de ser de la Entidad en el marco de las competencias y funciones establecidas en su ley de creación; de acuerdo a los criterios de la modernización del Estado y en el marco de la Visión sectorial o de ser el caso territorial. b) Conjunto de actividades ordenadas que contribuyen al logro de un objetivo estratégico institucional y que involucran el uso de recursos. Asimismo, cuentan con unidad de medida y meta determinada. Permiten articular el logro de los objetivos, de manera coherente e integrada con otras acciones estratégicas institucionales. c) Es la descripción del propósito a ser alcanzado medido a través de indicadores y sus correspondientes metas; las cuales, se establecen de acuerdo al periodo del plan estratégico. Está compuesto por el propósito, los indicadores y las metas. d) Es la situación del sector o territorio que se espera alcanzar en el futuro. Se establece de acuerdo al escenario apuesta y teniendo como referencia el escenario óptimo. Con: 1. Visión. 2. Misión. 3. Objetivos estratégicos. 4. Acciones estratégicas.",
    "alternativas": [
      "a)-2; b)-4; c)-3; d)-1",
      "a)-1; b)-3; c)-4; d)-2",
      "a)-2; b)-4; c)-1; d)-3",
      "a)-1; b)-3; c)-2; d)-4"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'a)-2; b)-4; c)-3; d)-1'. Aunque no hay una correlación directa en el PDF, esta respuesta se puede inferir de las definiciones de misión, acciones estratégicas, objetivos estratégicos y visión que se presentan en las páginas 15-16 del documento."
  },
  {
    "pregunta": "Una Entidad adquirió alimentos para el Programa de Vaso de Leche. Al recibir los alimentos, el personal los almacena hasta distribuirlos, sin tener en cuenta las condiciones requeridas, lo que ocasiono que se malogren dichos alimentos. ¿Qué principio vulnero?",
    "alternativas": [
      "Probidad",
      "Idoneidad",
      "Veracidad",
      "Justicia y Equidad"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Idoneidad'. En la página 32 del PDF, se define el principio de Idoneidad como 'Condición o aptitud para ejercicio de la función pública'. No almacenar correctamente los alimentos demuestra falta de idoneidad en el desempeño de las funciones."
  },
  {
    "pregunta": "Un contratista soborna al Jefe de Almacén de una Entidad para que declare que se internaron 500 bolsas en el almacén, habiéndose realmente internado 200 bolsas de arroz. ¿Qué principio vulnera?",
    "alternativas": [
      "Idoneidad",
      "Veracidad",
      "Probidad",
      "Justicia y Equidad"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Probidad'. En la página 32 del PDF, se define el principio de Probidad como 'Rectitud, honradez y honestidad, busca interés general y no ventaja personal'. Aceptar un soborno y declarar información falsa viola directamente este principio."
  },
  {
    "pregunta": "Mencione cuales son las fases del planeamiento estratégico.",
    "alternativas": [
      "La fase institucional fase de análisis prospectivo y fase estratégica.",
      "La fase institucional, fase de análisis prospectivo, fase estratégica y fase de evaluación.",
      "La fase institucional, fase de evaluación y fase de análisis prospectivo.",
      "La fase institucional, fase de análisis prospectivo, fase estratégica y fase de seguimiento."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'La fase institucional, fase de análisis prospectivo, fase estratégica y fase de seguimiento'. En la página 14 del PDF, se muestra un diagrama con las fases del proceso de planeamiento estratégico, que incluye estas cuatro fases."
  },
  {
    "pregunta": "En cuál de las fases del planeamiento estratégico se establece la 'visión país'.",
    "alternativas": [
      "Fase estratégica",
      "Fase institucional",
      "Fase de evaluación",
      "Fase prospectiva"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Fase prospectiva'. Aunque no se menciona explícitamente en el PDF, se puede inferir de la información en la página 14 que la fase de análisis prospectivo es donde se establecen visiones de largo plazo como la 'visión país'."
  },
  {
    "pregunta": "Cuál sería la secuencia para que la Municipalidad Distrital 'San Agustín' elabore su planeamiento estratégico.",
    "alternativas": [
      "Plan de Desarrollo Nacional - Plan Estratégico Institucional - Plan de Desarrollo Local Concertado.",
      "Plan Operativo Institucional- Plan Estratégico Institucional - Plan Anual de Contrataciones.",
      "Plan Estratégico Sectorial Multianual - Plan Estratégico Institucional - Plan de Desarrollo Nacional.",
      "Plan de Desarrollo Nacional - Plan de Desarrollo Local Concertado – Plan Estratégico Institucional."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Plan de Desarrollo Nacional - Plan de Desarrollo Local Concertado – Plan Estratégico Institucional'. En la página 13 del PDF, se muestra la cadena de planes estratégicos para los Gobiernos Regionales y Locales, que sigue este orden."
  },
  {
    "pregunta": "Cuál sería la secuencia para que el Ministerio de Cultura elabore su planeamiento estratégico",
    "alternativas": [
      "Plan de Desarrollo Nacional - Plan Estratégico Institucional - Plan de Desarrollo Local Concertado.",
      "Plan Estratégico Institucional- Plan Operativo Institucional- Plan Anual de Contrataciones.",
      "Plan Estratégico Sectorial Multianual - Plan Estratégico Institucional - Plan de Desarrollo Nacional.",
      "Plan de Desarrollo Nacional - Plan Estratégico Sectorial Multianual - Plan Estratégico Institucional."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Plan de Desarrollo Nacional - Plan Estratégico Sectorial Multianual - Plan Estratégico Institucional'. En la página 12 del PDF, se muestra la cadena de planes estratégicos para los sectores y sus Organismos Públicos Adscritos, que sigue este orden."
  },
  {
    "pregunta": "Cuál es la etapa del planeamiento estratégico que permite tener como resultado la aprobación del plan estratégico institucional.",
    "alternativas": [
      "Fase estratégica",
      "Fase institucional",
      "Fase prospectiva",
      "Fase de seguimiento"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Fase institucional'. En la página 14 del PDF, se menciona que la fase institucional es la que resulta en la aprobación del Plan Estratégico Institucional."
  },
  {
    "pregunta": "En qué fase del planeamiento estratégico se tiene como resultado el PESEM.",
    "alternativas": [
      "Fase estratégica",
      "Fase institucional",
      "Fase prospectiva",
      "Fase de seguimiento"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Fase estratégica'. Aunque no se menciona explícitamente en el PDF, se puede inferir de la información en la página 14 que el Plan Estratégico Sectorial Multianual (PESEM) se desarrolla en la fase estratégica."
  },
  {
    "pregunta": "Correlacione: a) PEI ( ) lo realizan los sectores b) PESEM ( ) duración de 8 años c) POI ( ) duración de 3 años d) PDRC ( ) se establece las actividades a realizar Rspta: B, D, A, C",
    "alternativas": [
      "B, D, A, C",
      "A, B, C, D",
      "C, D, A, B",
      "D, C, B, A"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'B, D, A, C'. Aunque no hay una correlación directa en el PDF, esta respuesta se puede inferir de la información sobre los diferentes planes estratégicos presentada en las páginas 12-13 del documento."
  },
  {
    "pregunta": "El servidor 'José' de un Ministerio tardo veinte (20) días en pagar al contratista, por lo que la Entidad tuvo que pagar los intereses legales correspondientes, antes esto que se debería hacer.",
    "alternativas": [
      "Se debe aperturar un proceso disciplinario.",
      "Se debe aperturar un proceso administrativo.",
      "Se le debe cobrar al servidor los intereses legales.",
      "No se debe hacer nada."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Se debe aperturar un proceso disciplinario'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre responsabilidad administrativa de los funcionarios en la página 28."
  },
  {
    "pregunta": "Se compra 10 tomógrafos para un Hospital de Huaraz; sin embargo, al momento de instalar se percatan que no cuentan con el ambiente, ante esto que principio se ha vulnerado.",
    "alternativas": [
      "Principio ético de eficiencia",
      "Principio ético de justicia",
      "Principio ético de veracidad",
      "Principio ético de eficiencia y justicia"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Principio ético de eficiencia'. En la página 32 del PDF, se define el principio de Eficiencia como 'Calidad de las funciones a su cargo'. Comprar equipos sin asegurar que haya un ambiente adecuado para instalarlos demuestra falta de eficiencia."
  },
  {
    "pregunta": "En una LP, el servidor 'Javier' formo parte del Comité de Selección, al momento de evaluar los ofertas su jefe inmediato le ordeno que descalifique a todas los ofertas excepto o lo empresa 'EL SOL SAC', y dicha orden es cumplido por dicho servidor, ante esto que principio ha vulnerado.",
    "alternativas": [
      "Principio ético de eficiencia",
      "Principio ético de lealtad y obediencia",
      "Principio ético de probidad",
      "Principio ético de probidad y veracidad"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Principio ético de probidad'. En la página 32 del PDF, se define el principio de Probidad como 'Rectitud, honradez y honestidad, busca interés general y no ventaja personal'. Descalificar ofertas injustamente viola directamente este principio."
  },
  {
    "pregunta": "En una LP para un servicio de pintado, se incluyó como factor de evaluación, la metodología propuesta, ante esto que principio ha vulnerado.",
    "alternativas": [
      "Principio de justicia y equidad",
      "Principio de eficiencia y veracidad",
      "Principio de probidad y eficiencia",
      "Principio de eficiencia"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Principio de eficiencia'. Aunque no hay una respuesta directa en el PDF, esta conclusión se puede inferir de la información sobre los principios éticos en la página 32, donde se menciona la eficiencia como uno de los principios del Código de Ética de la Función Pública. Incluir factores de evaluación inadecuados afecta la eficiencia del proceso."
  },
  {
    "pregunta": "En una SCI, se incluyó como factor de evaluación la experiencia del postor, ante esto que principio ha vulnerado.",
    "alternativas": [
      "Principio de eficiencia y veracidad",
      "Principio de eficiencia",
      "Principio de eficiencia e idoneidad",
      "No se ha vulnerado ningún principio"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'No se ha vulnerado ningún principio'. Aunque no se menciona explícitamente en el PDF, en una Selección de Consultores Individuales (SCI), la experiencia del postor es un factor válido de evaluación, por lo que no se viola ningún principio al incluirlo."
  },
  {
    "pregunta": "En una AS para una consultoría de impacto ambiental, se incluyó como factor de evaluación, la metodología propuesta, ante esto que principio ha vulnerado.",
    "alternativas": [
      "Principio de eficiencia y veracidad",
      "Principio de eficiencia e idoneidad",
      "Principio de eficiencia",
      "No se ha vulnerado ningún principio"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'No se ha vulnerado ningún principio'. Aunque no se menciona explícitamente en el PDF, en una consultoría, la metodología propuesta es un factor válido de evaluación, por lo que no se viola ningún principio al incluirlo."
  },
  {
    "pregunta": "Cuáles son las sanciones que se debe aplicar a un servidor público y que mantiene vínculo laboral",
    "alternativas": [
      "Amonestación y resolución contractual.",
      "Multa y resolución contractual.",
      "Amonestación y suspensión temporal hasta por dos años.",
      "Amonestación, suspensión temporal y destitución."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Amonestación, suspensión temporal y destitución'. En la página 37 del PDF, se indica que para las personas que mantienen vínculo laboral, las sanciones aplicables son amonestación, suspensión temporal hasta por un año, y destitución o despido."
  },
  {
    "pregunta": "Cuáles son las sanciones que se debe aplicar a un servidor público y que no mantiene vínculo laboral",
    "alternativas": [
      "Amonestación y destitución",
      "Multa y suspensión temporal por un año",
      "Multa y resolución contractual",
      "Multa y destitución."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Multa y resolución contractual'. En la página 37 del PDF, se indica que para las personas que desempeñan función pública sin vínculo laboral, la sanción aplicable es una multa."
  },
  {
    "pregunta": "Cuál de los siguientes no es un principio ético",
    "alternativas": [
      "Respeto",
      "Probidad",
      "Transparencia",
      "Idoneidad"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Transparencia'. En la página 32 del PDF, se listan los principios éticos y la transparencia no está incluida como uno de ellos, sino que aparece como un deber en la página 33."
  },
  {
    "pregunta": "Cuál de los siguientes es un principio ético",
    "alternativas": [
      "Responsabilidad",
      "Respeto",
      "Discreción",
      "Neutralidad"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Respeto'. En la página 32 del PDF, se lista el respeto como uno de los principios éticos de la función pública."
  },
  {
    "pregunta": "Cuál de los siguientes no es un deber ético",
    "alternativas": [
      "Respeto",
      "Neutralidad",
      "Responsabilidad",
      "Discreción"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Respeto'. En la página 32 del PDF, el respeto se lista como un principio ético, no como un deber. Los deberes éticos se listan en la página 33."
  },
  {
    "pregunta": "Cuál de los siguientes no es uno prohibición del código de ético",
    "alternativas": [
      "Mantener interés en conflicto",
      "Obtener ventajas indebidas",
      "Hacer mal uso de información privilegiada",
      "Ejercicio adecuado al cargo"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Ejercicio adecuado al cargo'. En la página 34 del PDF, se listan las prohibiciones éticas y el 'Ejercicio adecuado al cargo' no está incluido como una prohibición, sino que es un deber ético mencionado en la página 33."
  },
  {
    "pregunta": "Con la se da inicio al proceso de planeamiento estratégico",
    "alternativas": [
      "Fase institucional",
      "Fase prospectiva",
      "Fase estratégica",
      "Fase de seguimiento"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Fase prospectiva'. En la página 14 del PDF, se muestra un diagrama del proceso de planeamiento estratégico que inicia con la fase de análisis prospectivo."
  },
  {
    "pregunta": "Cuál es la secuencia correcta.",
    "alternativas": [
      "Fase estratégica, fase institucional y fase prospectiva",
      "Fase institucional, fase prospectiva y fase de seguimiento",
      "Fase prospectiva, fase institucional y fase estratégica",
      "Fase prospectiva, fase estratégica y fase institucional"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Fase prospectiva, fase estratégica y fase institucional'. En la página 14 del PDF, se muestra un diagrama que indica esta secuencia para el proceso de planeamiento estratégico."
  },
  {
    "pregunta": "Cuál de las Fases del proceso de Planeamiento estratégica es transversal.",
    "alternativas": [
      "Fase prospectiva",
      "Fase institucional",
      "Fase de seguimiento",
      "Fase estratégica"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Fase de seguimiento'. En la página 14 del PDF, se muestra un diagrama donde la fase de seguimiento aparece como transversal a todas las demás fases del proceso de planeamiento estratégico."
  },
  {
    "pregunta": "Una entidad debía aplicar una penalidad de S/ 50,000 por el retraso injustificado; sin embargo, por error le aplican una penalidad de S/30,000 ¿Qué responsabilidad se asumiría?",
    "alternativas": [
      "Responsabilidad administrativa",
      "Responsabilidad penal y civil",
      "Responsabilidad administrativa y civil",
      "Responsabilidad administrativa, civil y penal"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Responsabilidad administrativa y civil'. En la página 28 del PDF, se explica que cuando un funcionario comete un error en el cálculo de una penalidad, incurre en responsabilidad administrativa y civil."
  },
  {
    "pregunta": "Una entidad debía aplicar una penalidad de S/ 180,000 por retraso injustificado; sin embargo, le aplican una penalidad de S/ 200,000 ¿Qué tipo de responsabilidad se asumiría?",
    "alternativas": [
      "Responsabilidad administrativa",
      "Responsabilidad penal y civil",
      "Responsabilidad administrativa y civil",
      "Responsabilidad administrativa, civil y penal"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Responsabilidad administrativa y civil'. Aunque no se menciona específicamente este caso en el PDF, se puede inferir de la información en la página 28 que cualquier error en la aplicación de penalidades, sea por defecto o por exceso, implica responsabilidad administrativa y civil."
  },
  {
    "pregunta": "Se define como la razón de ser de la entidad",
    "alternativas": [
      "La misión",
      "La visión",
      "Los objetivos estratégicos",
      "Las acciones estratégicas"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'La misión'. En la página 15 del PDF, se define la misión como 'Define la razón de ser de la Entidad en el marco de las competencias y funciones establecidas en su ley de creación'."
  },
  {
    "pregunta": "Se define como el conjunto de actividades ordenadas que contribuyen al logro de un objetivo estratégico, que involucran el uso de recursos y cuentan con unidad de medida.",
    "alternativas": [
      "La misión",
      "Los objetivos estratégicos",
      "Las acciones estratégicas",
      "La visión"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Las acciones estratégicas'. En la página 15 del PDF, se definen las acciones estratégicas como 'Conjunto de actividades ordenadas que contribuyen al logro de un objetivo estratégico institucional y que involucran el uso de recursos. Asimismo, cuentan con unidad de medida y meta determinada'."
  },
  {
    "pregunta": "¿Cuál de los siguientes no es un deber ético de la Función Pública que todo Servidor Público debe tener en cuenta en su actuar?",
    "alternativas": [
      "Uso adecuado de los bienes del estado",
      "Neutralidad",
      "Responsabilidad",
      "Lealtad y obediencia."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Lealtad y obediencia'. En la página 33 del PDF, se listan los deberes éticos y 'Lealtad y obediencia' no está incluido como uno de ellos, sino que aparece como un principio en la página 32."
  },
  {
    "pregunta": "¿Cuál de las siguientes no es una prohibición de la función pública que todo servidor debe tener en cuenta en su actuar? Señale la alternativa correcta.",
    "alternativas": [
      "Obtener ventajas indebidas.",
      "Ejercicio adecuado del cargo.",
      "Presionar, amenazar y/o acosar.",
      "Mantener intereses de conflicto."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Ejercicio adecuado del cargo'. En la página 34 del PDF, se listan las prohibiciones éticas y el 'Ejercicio adecuado del cargo' no está incluido como una prohibición, sino que es un deber ético mencionado en la página 33."
  },
  {
    "pregunta": "Cuáles son las sanciones aplicables a aquellas personas que mantienen vínculo laboral?. Señale la alternativa correcta:",
    "alternativas": [
      "Amonestación, suspensión temporal y despido.",
      "Amonestación y despido.",
      "Multa y Resolución de contrato.",
      "Resolución de contrato."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'Amonestación, suspensión temporal y despido'. En la página 37 del PDF, se indica que para las personas que mantienen vínculo laboral, las sanciones aplicables son amonestación, suspensión temporal hasta por un año, y destitución o despido."
  },
  {
    "pregunta": "Una entidad contrata la adquisición de bidones de agua. Cuando el contratista entrega dichos bidones, estos se internan en un espacio físico de forma temporal, para después entregarla a las áreas usuarias que lo requieran. A qué macroproceso de la cadena de abastecimiento nos referimos?",
    "alternativas": [
      "Distribución",
      "Almacenamiento",
      "Inventario",
      "Mantenimiento"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Almacenamiento'. Aunque no se menciona explícitamente en el PDF, el almacenamiento temporal de bienes antes de su distribución a las áreas usuarias es parte del macroproceso de almacenamiento en la cadena de abastecimiento."
  },
  {
    "pregunta": "Es el documento que contiene el presupuesto inicial de la Entidad aprobado por su titular. Es elaborado por la oficina de planeamiento y presupuesto para el periodo de un año sobre la base de las de los fines, objetivos y metas presupuestarias previstas.",
    "alternativas": [
      "POI",
      "PAC",
      "PIA",
      "N/A"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'PIA'. Aunque no se define explícitamente en el PDF, el PIA (Presupuesto Institucional de Apertura) es el documento que contiene el presupuesto inicial de la Entidad aprobado por su titular para un año fiscal."
  },
  {
    "pregunta": "Es el documento en el que se programan las distintas actividades que llevará a cabo la Entidad para cumplir con los objetivos estratégicos.",
    "alternativas": [
      "POI",
      "PAC",
      "PIA",
      "N/A"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'POI'. En la página 15 del PDF, se menciona que el POI (Plan Operativo Institucional) es donde se programan las actividades operativas de la entidad."
  },
  {
    "pregunta": "Señale la alternativa correcta en la que se elabora los siguientes instrumentos de gestión para la Planificación Estratégica de la Municipalidad Distrital de la Perla: 1. Plan de Desarrollo Local Concertado, 2. Plan Estratégico Institucional, 3. Plan de Desarrollo Nacional, 4. POI.",
    "alternativas": [
      "3,2,4,1",
      "3,1,2,4",
      "1,3,2,4",
      "4,1,2,3"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es '3,1,2,4'. En la página 13 del PDF, se muestra la cadena de planes estratégicos para los Gobiernos Regionales y Locales, que sigue el orden: PEDN (Plan Estratégico de Desarrollo Nacional) - PDRC/PDLC (Plan de Desarrollo Regional/Local Concertado) - PEI (Plan Estratégico Institucional) - POI (Plan Operativo Institucional)."
  },
  {
    "pregunta": "La gestión por resultados se define como:",
    "alternativas": [
      "La estrategia que orienta a generar menor valor público.",
      "La estrategia que orienta a generar igual valor público.",
      "La estrategia que orienta a generar igual o menor valor público.",
      "La estrategia que orienta a generar mayor valor público."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'La estrategia que orienta a generar mayor valor público'. Aunque no se define explícitamente en el PDF, la gestión por resultados es una estrategia de gestión pública que conlleva tomar decisiones sobre la base de información confiable acerca de los efectos que la acción gubernamental tiene en la sociedad, con el objetivo de generar mayor valor público."
  },
  {
    "pregunta": "No es una fase del proceso de planeamiento estratégico:",
    "alternativas": [
      "Prospectivo",
      "Estratégico",
      "Institucional",
      "Operativo"
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Operativo'. En la página 14 del PDF, se muestran las fases del proceso de planeamiento estratégico, que son: Prospectiva, Estratégica, Institucional y Seguimiento. La fase 'Operativa' no está incluida en este"
  },
  {
    "pregunta": "A nivel institucional, cada Pliego del Sector Público elabora un y un .",
    "alternativas": [
      "PEI - POI",
      "PESEM-PAC",
      "PIA-PESEN",
      "N/A"
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es 'PEI - POI'. En la página 12 del PDF, se muestra que a nivel institucional, cada entidad elabora un Plan Estratégico Institucional (PEI) y un Plan Operativo Institucional (POI)."
  },
  {
    "pregunta": "¿Cuál de las siguientes sanciones se aplica al servidor público que transgrede los principios éticos de la función pública y que mantiene vínculo laboral con una Entidad pública? Señale la alternativa correcta.",
    "alternativas": [
      "Despido, amonestación y resolución contractual.",
      "Despido y resolución contractual.",
      "Despido, suspensión temporal y amonestación.",
      "Amonestación y resolución contractual."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Despido, suspensión temporal y amonestación'. En la página 37 del PDF, se indica que para las personas que mantienen vínculo laboral, las sanciones aplicables son amonestación, suspensión temporal hasta por un año, y destitución o despido."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe actuar con rectitud, honradez y honestidad, procurando satisfacer el interés general y desechando todo provecho o ventaja personal, obtenido por sí o por interpósita persona:",
    "alternativas": [
      "Respeto.",
      "Probidad.",
      "Eficiencia.",
      "Idoneidad."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Probidad'. En la página 32 del PDF, se define el principio de Probidad como 'Rectitud, honradez y honestidad, busca interés general y no ventaja personal'."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe adecuar su conducta hacia el respeto de la Constitución y las Leyes, garantizando que en todas las fases del proceso de toma de decisiones o en el cumplimiento de los procedimientos administrativos, se respeten los derechos a la defensa y al debido procedimiento:",
    "alternativas": [
      "Eficiencia.",
      "Idoneidad.",
      "Respeto.",
      "Veracidad."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Respeto'. En la página 32 del PDF, se define el principio de Respeto como 'Adecuación de conducta hacia cumplimiento de normas'."
  },
  {
    "pregunta": "Es el deber de la Función Pública que señala que el Servidor Público debe actuar con absoluta imparcialidad política, económica o de cualquier otra índole en el desempeño de sus funciones demostrando independencia a sus vinculaciones con personas, partidos políticos o instituciones:",
    "alternativas": [
      "Transparencia.",
      "Discreción.",
      "Responsabilidad.",
      "Neutralidad."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es 'Neutralidad'. En la página 33 del PDF, se define el deber de Neutralidad como 'Imparcialidad en el desempeño de sus funciones'."
  },
  {
    "pregunta": "Es el principio de la Función Pública que señala que el Servidor Público debe expresarse con autenticidad en las relaciones funcionales con todos los miembros de su institución y con la ciudadanía, y contribuye al esclarecimiento de los hechos:",
    "alternativas": [
      "Respeto.",
      "Eficiencia.",
      "Veracidad.",
      "Idoneidad."
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es 'Veracidad'. En la página 32 del PDF, se define el principio de Veracidad como 'Autenticidad con miembros de institución y ciudadanía. Esclarece los hechos'."
  },
  {
    "pregunta": "Es el deber de la Función Pública que señala que el Servidor Público debe guardar reserva respecto de hechos o informaciones de los que tenga conocimiento con motivo o en ocasión del ejercicio de sus funciones, sin perjuicio de los deberes y las responsabilidades que le correspondan en virtud de las normas que regulan el acceso y la transparencia de la información pública:",
    "alternativas": [
      "Transparencia.",
      "Discreción.",
      "Responsabilidad.",
      "Neutralidad."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es 'Discreción'. En la página 33 del PDF, se define el deber de Discreción como 'Guarda reserva de información. Responsable del acceso a información pública'."
  },
  {
    "pregunta": "De la revisión de los requisitos para la suscripción del contrato se advierte que, se requiere la presentación de una declaración jurada de cada personal propuesto señalando que no se encuentra trabajando en otra Entidad Pública o Privada y que no lo realizará durante la prestación de sus servicios en la ejecución de la presente obra, adjuntado copia legible de su DNI (Documento Nacional de Identidad). ¿Qué principio se ha vulnerado?",
    "alternativas": [
      "Principio de Competencia",
      "Principio de Libertad de Concurrencia",
      "Principio de Transparencia",
      "Principio de Igualdad de trato"
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es Principio de Libertad de Concurrencia"
  },
  {
    "pregunta": "En qué casos, se incurre en fraccionamiento.",
    "alternativas": [
    "Surge una necesidad imprevisible adicional a la programada.",
    "No se contaba con los recursos disponibles suficientes para realizar la contratación",
    "Se efectúe a través de los Catálogos Electrónicos de Acuerdo Marco.",
    "Cuando contando con recursos disponibles no se realice una compra consolidada."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es: Cuando contando con recursos disponibles no se realice una compra consolidada."
    },
    {
    "pregunta": "¿Quiénes están impedidos de integrar un Comité de Selección?",
    "alternativas": [
    "El Jefe de Logística",
    "El servidor que por delegación haya aprobado el expediente de contratación del procedimiento de selección.",
    "El Administrador, quien está a cargo de la aprobación de los requerimientos.",
    "Aquel integrante del área usuaria que tenga intervención directa en la determinación de las características técnicas."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es: El servidor que por delegación haya aprobado el expediente de contratación del procedimiento de selección."
    },
    {
    "pregunta": "Son funciones del Órgano Encargado de las Contrataciones (marque la opción correcta)",
    "alternativas": [
    "Estar a cargo de la subasta inversa electrónica, la adjudicación simplificada para bienes, servicios en general y consultoría en general, la comparación de precios y la contratación directa.",
    "Aprobar el Cuadro Consolidado de Necesidades y el Presupuesto Institucional de Apertura (PIA)",
    "Supervisar y fiscalizar la labor de los miembros del Comité Especial, pudiendo incluso amonestarlos en caso fuere necesario.",
    "Custodiar el Expediente de Contratación sólo de los procedimientos de selección a su cargo, ordenando, archivando y preservando la documentación que respalda las actuaciones realizadas."
    ],
    "correcta": 0,
    "solucion": "La respuesta correcta es: Estar a cargo de la subasta inversa electrónica, la adjudicación simplificada para bienes, servicios en general y consultoría en general, la comparación de precios y la contratación directa."
    },
    {
    "pregunta": "En la indagación de mercado, el órgano encargado de las contrataciones determina que las cantidades no se encuentran perfectamente definidas, atendiendo a ello se le comunica al área usuaria que precise sus características técnicas indicando:",
    "alternativas": [
    "Que corresponde utilizar el sistema de suma alzada.",
    "Que corresponde utilizar el sistema de llave de mano.",
    "Que corresponde utilizar el sistema de precios unitarios.",
    "Que corresponde utilizar el concurso oferta"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es: Que corresponde utilizar el sistema de precios unitarios."
    },
    {
      "pregunta": "No pertenece a los sistemas de contratación:",
      "alternativas": [
      "Tarifas",
      "En Base a porcentajes",
      "A Suma Alzada",
      "Llave en mano"
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es: Llave en mano"
      },
      {
      "pregunta": "¿Tratándose de un convenio Interinstitucional previsto en el literal c) artículo 5°del TUO de la Ley de Contrataciones del Estado, que no requiera de un Certificado de Crédito Presupuestario, al no representar costo alguno para la Entidad, existiera la obligación de incluir el referido Convenio en el Plan Anual de Contrataciones (PAC) de la entidad?",
      "alternativas": [
      "Depende de la entidad.",
      "Si",
      "No",
      "Depende del órgano Encargado de las Contrataciones."
      ],
      "correcta": 1,
      "solucion": "La respuesta correcta es: Si"
      },
      {
      "pregunta": "Es el responsable de consolidar y valorizar el Cuadro de Necesidades",
      "alternativas": [
      "Órgano encargado de las contrataciones.",
      "Área usuaria.",
      "Oficina de Administración.",
      "Oficina de Presupuesto."
      ],
      "correcta": 0,
      "solucion": "La respuesta correcta es: Órgano encargado de las contrataciones."
      },
      {
      "pregunta": "Sobre los Requerimientos de Contratación (marque la opción correcta):",
      "alternativas": [
      "El requerimiento de bienes o servicios en general de carácter permanente, cuya provisión se requiera de manera continua o periódica se realiza por periodos no menores a un (1) año.",
      "No forman parte del requerimiento las Especificaciones Técnicas y Términos de Referencia, los mismos que son instrumentos formales distintos.",
      "En la definición del requerimiento puede hacerse referencia indistintamente a fabricación o procedencia, procedimiento de fabricación de marcas, patentes o tipos de producto, origen o producción determinados, en la medida en que hagan más eficiente la contratación con un determinado proveedor.",
      "El requerimiento no puede incluir requisitos de calificación de ningún tipo."
      ],
      "correcta": 0,
      "solucion": "La respuesta correcta es: El requerimiento de bienes o servicios en general de carácter permanente, cuya provisión se requiera de manera continua o periódica se realiza por periodos no menores a un (1) año."
      },
      {
      "pregunta": "Señale cuál del siguiente tipo de contratos no se aplica la Ley 30225 Ley de Contrataciones del Estado y su Reglamento:",
      "alternativas": [
      "La elaboración de un estudio de pre inversión para la construcción de una comisaría.",
      "Adquisición de equipos de cómputo.",
      "Contratación de servicios de consultaría para el análisis de una norma.",
      "Concesión de una carretera."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es: Concesión de una carretera."
      },
  {
    "pregunta": "Corresponde establecer el Valor Referencial cuando se determine la contratación de:",
    "alternativas": [
    "Bienes, Servicios en general, Consultorías y Ejecución de Obras.",
    "Consultorías en General y Consultorías de Obras.",
    "Servicios en General y Consultorías en General.",
    "Consultorías de obras y Ejecución de Obras."
    ],
    "correcta": 3,
    "solucion": "La respuesta correcta es: Consultorías de obras y Ejecución de Obras."
    },
    {
    "pregunta": "Ante la ausencia de un miembro titular del Comité de Selección, su respectivo suplente actúa:",
    "alternativas": [
    "Hasta la fecha de suscripción del contrato respectivo.",
    "Solo en tanto el titular esté ausente, reincorporándose este automáticamente cuando cesa el motivo de su ausencia.",
    "Solo en tanto el titular esté ausente, reincorporándose previa justificación del motivo de ausencia.",
    "De ahí en adelante hasta la culminación del procedimiento de selección."
    ],
    "correcta": 1,
    "solucion": "La respuesta correcta es: Solo en tanto el titular esté ausente, reincorporándose este automáticamente cuando cesa el motivo de su ausencia."
    },
    {
    "pregunta": "Respecto al Comité de Selección, indicar la respuesta falsa:",
    "alternativas": [
    "Los integrantes del comité de selección solo pueden ser removidos por caso fortuito o fuerza mayor, por cese en el servicio, u otra justificada, mediante documento debidamente motivado.",
    "Para sesionar y adoptar acuerdos válidos el quórum para el funcionamiento del Comité de selección se da con la presencia de la mayoría de miembros titulares.",
    "La designación del comité de selección es notificada por la Entidad a cada uno de los miembros.",
    "El comité de selección está integrado por tres (3) miembros, de los cuales uno (1) debe pertenecer al órgano encargado de las contrataciones de la Entidad y por lo menos uno (1) debe tener conocimiento técnico e el objeto de la contratación."
    ],
    "correcta": 1,
    "solucion": "La respuesta falsa es: Para sesionar y adoptar acuerdos válidos el quórum para el funcionamiento del Comité de selección se da con la presencia de la mayoría de miembros titulares."
    },
    {
    "pregunta": "¿Se puede incluir en el requerimiento disposiciones previstas en normas técnicas de carácter voluntario?",
    "alternativas": [
    "No, debido a que el OSCE ha indicado en Pronunciamiento que está prohibido.",
    "No, dado que no forman parte del ordenamiento jurídico nacional.",
    "Sí, siempre que sirvan para asegurar el cumplimiento de los requisitos funcionales o técnicos, se verifique que existe en el mercado algún organismo que pueda acreditar el cumplimiento de dicha norma técnica, y no contraventa normas de carácter obligatorio.",
    "Sí, siempre que no contravenga ninguna norma nacional obligatoria y esté autorizada expresamente por INACAL (INDECOPI)"
    ],
    "correcta": 2,
    "solucion": "La respuesta correcta es: Sí, siempre que sirvan para asegurar el cumplimiento de los requisitos funcionales o técnicos, se verifique que existe en el mercado algún organismo que pueda acreditar el cumplimiento de dicha norma técnica, y no contraventa normas de carácter obligatorio."
    },
    {
      "pregunta": "¿Cuál de los siguientes no es un factor de evaluación para la contratación de bienes?",
      "alternativas": [
      "Capacitación del Personal",
      "Sostenibilidad Social",
      "Experiencia del Postor",
      "Precio"
      ],
      "correcta": 0,
      "solucion": "La respuesta correcta es 'Capacitación del Personal'. En la contratación de bienes, la capacitación del personal no es un factor de evaluación típico, mientras que los otros factores mencionados sí lo son."
      },
      {
      "pregunta": "El procedimiento de selección de subasta inversa electrónica, se realiza para la:",
      "alternativas": [
      "Contratación de bienes y servicios comunes, incluyendo consultorías, salvo consultorías de obras",
      "Contratación de bienes y servicios comunes",
      "Contratación de bienes, servicios y obras comunes",
      "Contratación de servicios, incluyendo consultorías"
      ],
      "correcta": 1,
      "solucion": "La respuesta correcta es 'Contratación de bienes y servicios comunes'. La subasta inversa electrónica se utiliza específicamente para la contratación de bienes y servicios comunes que se encuentran en el Listado de Bienes y Servicios Comunes."
      },
      {
      "pregunta": "En las Contrataciones Directas cuál de los siguientes supuestos no es delegable:",
      "alternativas": [
      "Servicios especializados para la defensa de funcionarios.",
      "Proveedor único.",
      "Cuando se contrate con otra entidad.",
      "Servicios de capacitación."
      ],
      "correcta": 2,
      "solucion": "La respuesta correcta es 'Cuando se contrate con otra entidad'. Este supuesto de contratación directa no es delegable, debe ser aprobado directamente por el Titular de la Entidad."
      },
      {
      "pregunta": "¿Cuáles son los factores de evaluación para licitaciones públicas de obras?",
      "alternativas": [
      "Precio, sostenibilidad ambiental y social, protección social y desarrollo humano, integridad de la contratación pública, y en el caso de la modalidad de llave en mano, capacitación al personal de la Entidad.",
      "Precio, sostenida ambiental y social, y en el caso de la modalidad de llave en mano, operación asistida.",
      "Capacidad Legal, Capacidad Técnica y Profesional, y Experiencia del Postor",
      "Capacitación, Infraestructura y Precio y experiencia del postor"
      ],
      "correcta": 0,
      "solucion": "La respuesta correcta es 'Precio, sostenibilidad ambiental y social, protección social y desarrollo humano, integridad de la contratación pública, y en el caso de la modalidad de llave en mano, capacitación al personal de la Entidad.' Estos son los factores de evaluación establecidos para licitaciones públicas de obras según la normativa de contrataciones del Estado."
      },
      {
      "pregunta": "La elevación de cuestionamientos al pliego de absolución de consultas, observaciones e integración de bases, para que la Dirección de Gestión de Riesgos del OSCE emita pronunciamiento, procede:",
      "alternativas": [
      "Cuando no fueron acogidas las observaciones presentadas en cualquier procedimiento.",
      "Cuando la absolución resulta contraria a las buenas costumbres.",
      "Con la nueva normativa no procede la elevación en ningún caso.",
      "Sólo en el caso de LP y CP."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'Sólo en el caso de LP y CP.' La elevación de cuestionamientos al pliego de absolución de consultas, observaciones e integración de bases procede únicamente en los casos de Licitación Pública (LP) y Concurso Público (CP)."
      },
      {
      "pregunta": "Respecto a las Licitaciones Públicas indique la respuesta correcta:",
      "alternativas": [
      "En una Licitación Pública el plazo entre la integración de bases y la presentación de ofertas no debe ser menor de cuatro (4) días hábiles",
      "El plazo mínimo para la etapa de consultas y observaciones es de 05 días hábiles",
      "En una LP, para contratación de bienes, la secuencia correcta de los actos a cargo del comité de selección es la siguiente: presentación de ofertas, verificación de contenido mínimo, admisión de la propuesta, aplicación de los factores de evaluación, verificación de los requisitos de calificación, y otorgamiento de la buena pro.",
      "El plazo para el consentimiento de la Licitación Pública es de 05 días hábiles de notificada la buena pro, si es que se presentan más de una oferta."
      ],
      "correcta": 2,
      "solucion": "La respuesta correcta es 'En una LP, para contratación de bienes, la secuencia correcta de los actos a cargo del comité de selección es la siguiente: presentación de ofertas, verificación de contenido mínimo, admisión de la propuesta, aplicación de los factores de evaluación, verificación de los requisitos de calificación, y otorgamiento de la buena pro.' Esta es la secuencia correcta de actos en una Licitación Pública para contratación de bienes."
      },
      {
      "pregunta": "En una licitación pública para la ejecución de una obra, ¿La etapa de evaluación de la oferta es posterior a la calificación?",
      "alternativas": [
      "La afirmación es correcta toda vez que primero debe Calificarse la oferta y después evaluarse",
      "No es correcto al desarrollarse ambas Etapas de manera conjunta",
      "La afirmación es correcta en tanto se trate de una obra de Saneamiento",
      "En una Licitación Pública para obras, la Etapa de Evaluación es anterior a la Calificación de la Oferta"
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'En una Licitación Pública para obras, la Etapa de Evaluación es anterior a la Calificación de la Oferta'. En las licitaciones públicas para obras, primero se evalúan las ofertas y luego se califican, a diferencia de otros tipos de procedimientos."
      },
      {
      "pregunta": "De la revisión de las Bases se advierte que, el plazo de ejecución indicado en letras dice (ciento veinte) pero en números se ha indicado (180). ¿Qué principio se ha vulnerado?",
      "alternativas": [
      "Principio de Competencia",
      "Principio de Libertad de Concurrencia",
      "Principio de Transparencia",
      "Principio de Equidad"
      ],
      "correcta": 2,
      "solucion": "La respuesta correcta es 'Principio de Transparencia'. La discrepancia entre el plazo de ejecución indicado en letras y en números vulnera el Principio de Transparencia, ya que no permite una información clara y coherente a los postores."
      },
      {
      "pregunta": "Si una subasta inversa electrónica es declarada desierta por segunda vez, la siguiente convocatoria se realiza bajo el procedimiento de:",
      "alternativas": [
      "Subasta Inversa Electrónica",
      "Licitación Pública",
      "Bajo subasta inversa electrónica, salvo que la Entidad como resultado del análisis efectuado en el informe de declaratoria de desierto determine su convocatoria a través de una Adjudicación Simplificada.",
      "Comparación de Precios"
      ],
      "correcta": 2,
      "solucion": "La respuesta correcta es 'Bajo subasta inversa electrónica, salvo que la Entidad como resultado del análisis efectuado en el informe de declaratoria de desierto determine su convocatoria a través de una Adjudicación Simplificada.' Esta opción refleja correctamente el procedimiento a seguir después de que una subasta inversa electrónica sea declarada desierta por segunda vez."
      },
      {
      "pregunta": "Señale la respuesta correcta. Durante la adjudicación simplificada, cual es el primer criterio de desempate",
      "alternativas": [
      "Sorteo electrónico a través del SEACE.",
      "Al postor que haya obtenido el mejor puntaje total.",
      "A favor de las microempresas y pequeñas empresas integradas por personas con discapacidad",
      "A favor de las microempresas y pequeñas empresas."
      ],
      "correcta": 1,
      "solucion": "La respuesta correcta es 'Al postor que haya obtenido el mejor puntaje total.' En una adjudicación simplificada, el primer criterio de desempate es otorgar la buena pro al postor que haya obtenido el mejor puntaje total."
      },
      {
      "pregunta": "¿En qué objeto de contratación se puede incluir el Factor de Evaluación calificaciones y/o experiencias del personal clave?",
      "alternativas": [
      "Únicamente en bienes",
      "En ejecución de obras",
      "Únicamente en consultoría en general",
      "Servicios"
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'Servicios'. El factor de evaluación de calificaciones y/o experiencias del personal clave se puede incluir en la contratación de servicios, incluyendo consultorías y obras."
      },
      {
      "pregunta": "El OEC tiene a su cargo los procedimientos de:",
      "alternativas": [
      "Concurso Público",
      "Licitación Pública",
      "Concurso de Precios",
      "Adjudicación Simplificada"
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'Adjudicación Simplificada'. El Órgano Encargado de las Contrataciones (OEC) tiene a su cargo los procedimientos de Adjudicación Simplificada, entre otros."
      },
      {
      "pregunta": "¿Es subsanable la legalización de las firmas de la promesa formal de consorcio?",
      "alternativas": [
      "No es subsanable",
      "Solo es subsanable cuando la presentación de ofertas se realiza en acto público",
      "Sí, es subsanable",
      "Solo es subsanable las firmas no la legalización"
      ],
      "correcta": 2,
      "solucion": "La respuesta correcta es 'Sí, es subsanable'. La legalización de las firmas de la promesa formal de consorcio es un requisito subsanable según la normativa de contrataciones del Estado."
      },
      {
      "pregunta": "¿En qué caso corresponde aplicar el supuesto de contratación directa denominado: 'Contrataciones derivadas de un contrato resuelto o declarado nulo'",
      "alternativas": [
      "Cuando se resuelva un contrato y exista la necesidad de culminar con la ejecución de las prestaciones derivadas de este.",
      "Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, pudiéndose contratar con proveedores distintos a los que fueron postores.",
      "Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, no debiendo encontrarse la resolución sometida a algún medio de solución de controversias.",
      "Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, aun cuando dicha resolución se encuentre sometida a alguno de los medios de solución de controversias."
      ],
      "correcta": 1,
      "solucion": "La respuesta correcta es 'Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, pudiéndose contratar con proveedores distintos a los que fueron postores.' Este supuesto permite a la entidad contratar directamente para culminar las prestaciones de un contrato resuelto, incluso con proveedores que no participaron en el proceso original."
      },
      {
      "pregunta": "Para convocar un procedimiento de selección, por regla general, se debe verificar previamente lo siguiente:",
      "alternativas": [
      "Que se publique las Bases Administrativas al momento de la convocatoria.",
      "Que el procedimiento se encuentre incluido en el PAC",
      "Que se publique el Resumen Ejecutivo al momento de la convocatoria, excepto en el caso de obras.",
      "Todas son correctas."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'Todas son correctas.' Para convocar un procedimiento de selección, se debe verificar que se publiquen las Bases Administrativas, que el procedimiento esté incluido en el PAC, y que se publique el Resumen Ejecutivo (excepto en obras)."
      },
      {
      "pregunta": "¿Cuáles son los requisitos de calificaciones opcionales en los concursos públicos de consultoría de obras?",
      "alternativas": [
      "Infraestructura",
      "Equipamiento",
      "Equipamiento y Experiencia del personal clave",
      "Equipamiento, Experiencia en la Actividad y Experiencia en la Especialidad"
      ],
      "correcta": 2,
      "solucion": "La respuesta correcta es 'Equipamiento y Experiencia del personal clave'. Estos son los requisitos de calificación opcionales en los concursos públicos de consultoría de obras."
      },
      {
      "pregunta": "No es un requisito de calificación de la oferta:",
      "alternativas": [
      "La Capacidad Legal",
      "La Capacidad Técnica",
      "La Capacidad del Profesional",
      "El Plazo de entrega"
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'El Plazo de entrega'. El plazo de entrega no es un requisito de calificación de la oferta, sino que generalmente es un factor de evaluación."
      },
      {
        "pregunta": "¿Cuáles son los factores de evaluación para concurso público de consultoría de obras?",
        "alternativas": [
        "Capacidad Legal, Capacidad Técnica y Profesional, y Experiencia del Postor",
        "Precio, sostenibilidad ambiental y social, y capacitación del personal de la entidad",
        "Experiencia del postor en la especialidad; Metodología Propuesta; Conocimiento del proyecto e identificación de facilidades, dificultades y propuestas de solución; Sostenibilidad Ambiental y Social, Protección social y desarrollo humano; e Integridad en la contratación pública.",
        "Metodología Propuesta, Calificación y Experiencia Personal Clave y sostenibilidad social y ambiental"
        ],
        "correcta": 2,
        "solucion": "La respuesta correcta es 'Experiencia del postor en la especialidad; Metodología Propuesta; Conocimiento del proyecto e identificación de facilidades, dificultades y propuestas de solución; Sostenibilidad Ambiental y Social, Protección social y desarrollo humano; e Integridad en la contratación pública.' Estos son los factores de evaluación establecidos para concursos públicos de consultoría de obras según la normativa de contrataciones del Estado."
        },
        {
        "pregunta": "El funcionario delegado por el Titular de la Entidad, aprueba el expediente de contratación mediante un proveído, sobre el particular corresponde firmar:",
        "alternativas": [
        "En todos los casos la aprobación debió realizarse necesariamente mediante resolución.",
        "En todos los casos la aprobación no debió realizarse necesariamente mediante resolución.",
        "La aprobación debió realizarse necesariamente mediante resolución del funcionario delegado.",
        "La aprobación ha sido correcta"
        ],
        "correcta": 3,
        "solucion": "La respuesta correcta es 'La aprobación ha sido correcta'. La aprobación del expediente de contratación puede realizarse mediante un proveído si el funcionario ha sido debidamente delegado por el Titular de la Entidad."
        },
        {
        "pregunta": "Los procedimientos de selección que presentan las ofertas en un sobre son:",
        "alternativas": [
        "Adjudicación Simplificada para consultoría de obras",
        "Adjudicación Simplificada para bienes y servicios en general",
        "Comparación de precios",
        "Concurso Público para consultoría de obras"
        ],
        "correcta": 2,
        "solucion": "La respuesta correcta es 'Comparación de precios'. En la comparación de precios, las ofertas se presentan en un solo sobre."
        },
        {
        "pregunta": "Relacione respecto a las competencias para resolver el recurso de apelación: 1. Titular de la Entidad, 2. Tribunal de Contrataciones del estado, a) Declarar nulidad en contratación de servicios en general por un valor estimado de S/. 180,000.00, b) Declarar fundado el recurso de apelación en contratación de servicios de consultoría en general por un valor estimado de S/. 250,000.00, c) Declarar infundado el recurso de apelación en contratación de bienes por un valor estimado de S/. 80,000.00, d) Declarar improcedente el recurso de apelación en contratación de ejecución de obras por un valor referencial de S/.3,500,000.00",
        "alternativas": [
        "1-a), 2-b), 1-c), 1-d)",
        "1-d), 2-b), 2-a), 1-c)",
        "1-c), 2-a), 2-b), 1-d)",
        "1-a), 2-b), 1-c), 2-d)"
        ],
        "correcta": 3,
        "solucion": "La respuesta correcta es '1-a), 2-b), 1-c), 2-d)'. El Titular de la Entidad resuelve apelaciones en contrataciones con valor estimado igual o menor a 50 UIT, mientras que el Tribunal de Contrataciones resuelve las apelaciones en contrataciones con valor estimado mayor a 50 UIT."
        },
        {
        "pregunta": "Relacione respecto a la conducción de los procedimientos de selección: 1. Órgano encargado de las contrataciones, 2. Comité de Selección, a) Comparación de precios, b) Selección de Consultores Individuales, c) Licitación Pública, d) Contratación Directa.",
        "alternativas": [
        "1-d), 2-b), 2-a), 1-c)",
        "1-a), 2-b), 1-c), 1-d)",
        "1-a), 2-b), 2-c), 1-d)",
        "1-c), 2-a), 2-b), 1-d)"
        ],
        "correcta": 2,
        "solucion": "La respuesta correcta es '1-a), 2-b), 2-c), 1-d)'. El Órgano encargado de las contrataciones conduce la Comparación de precios y la Contratación Directa, mientras que el Comité de Selección conduce la Selección de Consultores Individuales y la Licitación Pública."
        },
        {
        "pregunta": "Relacione respecto a las funciones de los siguientes órganos: 1. Órgano encargado de las contrataciones, 2. Titular de la Entidad, a) Autoriza la nulidad del contrato, b) Aplicación de penalidades, c) Licitación Pública, d) Procedimiento de pago, en lo que corresponda.",
        "alternativas": [
        "1-d), 2-b), 2-a), 1-c)",
        "1-a), 2-b), 1-c), 1-d)",
        "1-a), 2-b), 2-c), 1-d)",
        "1-c), 2-a), 2-b), 1-d)"
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es '1-d), 2-b), 2-a), 1-c)'. El Órgano encargado de las contrataciones se encarga del procedimiento de pago y la Licitación Pública, mientras que el Titular de la Entidad autoriza la nulidad del contrato y la aplicación de penalidades."
        },
        {
        "pregunta": "La __________ establece disposiciones para la aplicación del procedimiento de selección de Subasta Inversa Electrónica y la __________ establece disposiciones para la aplicación del método especial de contratación a través de los catálogos electrónicos de Acuerdo Marco.",
        "alternativas": [
        "Directiva Nº 006-2019-OSCE/CD, Directiva Nº 007-2017-OSCE/CD",
        "Directiva Nº 005-2017-OSCE/CD, Directiva Nº 007-2016-OSCE/CD",
        "Directiva Nº 008-2017-OSCE/CD, Directiva Nº 009-2017-OSCE/CD",
        "Directiva Nº 004-2015-OSCE/CD, Directiva Nº 008-2016-OSCE/CD"
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es 'Directiva Nº 006-2019-OSCE/CD, Directiva Nº 007-2017-OSCE/CD'. Estas son las directivas que establecen las disposiciones para la Subasta Inversa Electrónica y los catálogos electrónicos de Acuerdo Marco, respectivamente."
        },
        {
          "pregunta": "Relacione respecto a la buena pro: 1. Buena pro consentida, 2. Buena pro administrativamente firme, a) Se publica en el SEACE que el recurso de apelación ha sido declarado como no presentado o improcedente, b) Los postores no ejercieron el derecho de interponer el recurso de apelación, c) Opera la denegatoria ficta del recurso de apelación, d) Se publica en el SEACE la resolución que otorga y/o confirma la buena pro.",
          "alternativas": [
          "1-d), 2-b), 2-a), 1-c)",
          "1-d), 2-a), 2-b), 1-c)",
          "1-b), 2-a), 2-c), 2-d)",
          "1-a), 2-b), 1-c), 2-d)"
          ],
          "correcta": 2,
          "solucion": "La respuesta correcta es '1-b), 2-a), 2-c), 2-d)'. La buena pro consentida ocurre cuando los postores no ejercen el derecho de interponer recurso de apelación, mientras que la buena pro administrativamente firme se da en los otros casos mencionados."
          },
          {
          "pregunta": "Relacione respecto a los documentos del procedimiento de selección: 1. Bases, 2. Solicitud de Expresión de Interés, 3. Solicitud de cotización, a) Contratación Directa, b) Selección de Consultores Individuales, c) Comparación de Precios, d) Licitación Pública.",
          "alternativas": [
          "1-d), 2-b), 2-a), 1-c)",
          "1-a), 2-b), 1-c), 1-d)",
          "1-a), 2-b), 2-c), 1-d)",
          "1-a), 2-b), 3-c), 1-d)"
          ],
          "correcta": 3,
          "solucion": "La respuesta correcta es '1-a), 2-b), 3-c), 1-d)'. Las Bases se utilizan en Contratación Directa y Licitación Pública, la Solicitud de Expresión de Interés en Selección de Consultores Individuales, y la Solicitud de cotización en Comparación de Precios."
          },
          {
          "pregunta": "Una Municipalidad quiere convocar __________ por un valor estimado de S/ 800,000.00 para la contratación del Servicio de recojo de residuos sólidos. La secuencia del procedimiento de selección es: __________, __________ y __________.",
          "alternativas": [
          "Una adjudicación Simplificada, presentación de ofertas, admisión, evaluación y calificación de ofertas técnicas.",
          "Un concurso público, presentación de ofertas, admisión, evaluación y calificación de ofertas técnicas",
          "Un concurso público, admisión, presentación de ofertas, calificación y evaluación de ofertas",
          "Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas técnicas."
          ],
          "correcta": 1,
          "solucion": "La respuesta correcta es 'Un concurso público, presentación de ofertas, admisión, evaluación y calificación de ofertas técnicas'. Para un servicio de S/ 800,000.00, corresponde un concurso público, y la secuencia correcta es la mencionada."
          },
          {
          "pregunta": "Respecto a la Subasta Inversa Electrónica, no es correcto:",
          "alternativas": [
          "Los bienes o servicios deben contar con fichas técnicas aprobadas e incluidas en el Listado de Bienes y Servicios Comunes",
          "Se declara desierto cuando no se cuenta con dos ofertas válidas",
          "Se adjudica si existe solo una oferta válida",
          "Ninguna de las anteriores"
          ],
          "correcta": 1,
          "solucion": "La respuesta correcta es 'Se declara desierto cuando no se cuenta con dos ofertas válidas'. En la Subasta Inversa Electrónica, se puede adjudicar incluso con una sola oferta válida, por lo que no es correcto que se declare desierto cuando no hay dos ofertas válidas."
          },
          {
          "pregunta": "Respecto al Recurso de Apelación es correcto afirmar:",
          "alternativas": [
          "La interposición del recurso de apelación no suspende el procedimiento para la incorporación de proveedores a los Catálogos Electrónicos de Acuerdo Marco ni el procedimiento de extensión de vigencia de dichos catálogos.",
          "No se requiere garantía",
          "Se presenta ante el Tribunal cuando el valor estimado o valor referencial es menor o igual a 50 UIT",
          "Ninguna de las anteriores"
          ],
          "correcta": 0,
          "solucion": "La respuesta correcta es 'La interposición del recurso de apelación no suspende el procedimiento para la incorporación de proveedores a los Catálogos Electrónicos de Acuerdo Marco ni el procedimiento de extensión de vigencia de dichos catálogos.' Esta es una característica específica del recurso de apelación en estos casos."
          },
          {
          "pregunta": "El acto que declara la nulidad de un procedimiento de selección se debe registrar y publicar en la consola de selección del SEACE, con la indicación de __________, __________ y __________.",
          "alternativas": [
          "Los datos del titular de la entidad o la sala del tribunal de contrataciones, la causal de la nulidad, la etapa a la que se retrotraerá el procedimiento.",
          "Los datos del titular de la entidad o la sala del tribunal de contrataciones, la causal de la nulidad, la fecha de convocatoria del nuevo procedimiento.",
          "La causal de nulidad, la fecha de convocatoria del nuevo procedimiento, la fecha de convocatoria del nuevo procedimiento.",
          "Los datos del titular de la entidad o la sala del tribunal de contrataciones, la etapa a la que se retrotraerá el procedimiento, la fecha de convocatoria del nuevo procedimiento."
          ],
          "correcta": 0,
          "solucion": "La respuesta correcta es 'Los datos del titular de la entidad o la sala del tribunal de contrataciones, la causal de la nulidad, la etapa a la que se retrotraerá el procedimiento.' Estos son los elementos que deben indicarse al registrar y publicar la nulidad de un procedimiento de selección en el SEACE."
          },
          {
          "pregunta": "En __________, el plazo para absolver las consultas y observaciones no puede exceder de __________.",
          "alternativas": [
          "Adjudicación Simplificada, 5 días hábiles.",
          "Concurso Público, 5 días hábiles.",
          "Adjudicación Simplificada, 7 días hábiles",
          "Concurso Público, 7 días hábiles"
          ],
          "correcta": 3,
          "solucion": "La respuesta correcta es 'Concurso Público, 7 días hábiles'. En un Concurso Público, el plazo para absolver las consultas y observaciones no puede exceder de 7 días hábiles."
          },
      {
      "pregunta": "Una Entidad cancela una subasta inversa electrónica cuyo valor estimado asciende a S/. 150,000.00, por la causal de caso fortuito o fuerza mayor. Un postor que no está de acuerdo con la cancelación de dicho procedimiento, interpone el recurso de apelación ante el Tribunal de Contrataciones. ¿Cómo debería resolverse el recurso de apelación?",
      "alternativas": [
      "El recurso de apelación debe ser declarado infundado, porque la cancelación del procedimiento de selección se llevó acabo correctamente.",
      "El recurso de apelación debe ser declarado infundado por haberse interpuesto ante el Tribunal de Contrataciones.",
      "El recurso de apelación debe ser declarado fundado, porque no se configuró ninguna causal para cancelar el procedimiento de selección.",
      "El recurso de apelación debe ser declarado improcedente por haberse interpuesto ante el Tribunal de Contrataciones."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'El recurso de apelación debe ser declarado improcedente por haberse interpuesto ante el Tribunal de Contrataciones.' Para un valor estimado de S/. 150,000.00, el recurso de apelación debe presentarse ante la Entidad, no ante el Tribunal de Contrataciones."
      },
      {
      "pregunta": "Para la contratación de servicio de fotocopiado de documentos por un monto de S/. 380,000, una Entidad debe convocar __________, y para la adquisición de camionetas por un monto de S/. 250,000, debe convocar __________.",
      "alternativas": [
      "Concurso público, Licitación pública.",
      "Adjudicación simplificada, licitación pública.",
      "Adjudicación simplificada, adjudicación simplificada.",
      "Concurso público, adjudicación simplificada."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'Concurso público, adjudicación simplificada.' Para el servicio de fotocopiado de S/. 380,000 corresponde un concurso público, mientras que para la adquisición de camionetas por S/. 250,000 corresponde una adjudicación simplificada."
      },
      {
      "pregunta": "En un concurso público para la contratación de un estudio de factibilidad de un área protegida, convocado por una Entidad, el otorgamiento de la buena pro se realiza en acto privado. Al verificar esta situación, la Entidad declara la nulidad del procedimiento. Ante ello, un participante interpone un recurso de apelación porque no está de acuerdo con dicha declaratoria.",
      "alternativas": [
      "El recurso de apelación debe ser declarado improcedente porque no puede interponer dicho recurso, sino solamente los postores.",
      "El recurso de apelación debe ser declarado infundado porque la Entidad debió cancelar el procedimiento de selección.",
      "El recurso de apelación debe ser declarado fundado porque la Entidad no actuó correctamente al declarar la nulidad del procedimiento de selección.",
      "El recurso de apelación debe ser declarado infundado porque la Entidad actuó correctamente al declarar la nulidad del procedimiento de selección."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'El recurso de apelación debe ser declarado infundado porque la Entidad actuó correctamente al declarar la nulidad del procedimiento de selección.' En un concurso público, el otorgamiento de la buena pro debe realizarse en acto público, por lo que la Entidad actuó correctamente al declarar la nulidad."
      },
      {
      "pregunta": "En la __________ para la contratación de bienes, el plazo entre la integración de bases y la presentación de ofertas, no puede ser menor de __________",
      "alternativas": [
      "Adjudicación simplificada, 5 días hábiles.",
      "Licitación pública, 3 días hábiles.",
      "Adjudicación simplificada, 2 días hábiles.",
      "Licitación pública, 7 días hábiles."
      ],
      "correcta": 3,
      "solucion": "La respuesta correcta es 'Licitación pública, 7 días hábiles.' En una licitación pública para la contratación de bienes, el plazo entre la integración de bases y la presentación de ofertas no puede ser menor de 7 días hábiles."
      },
      {
        "pregunta": "Una Entidad quiere convocar __________ para la supervisión de la obra 'Manantial'. La secuencia correcta de dicho procedimiento de selección es: __________",
        "alternativas": [
        "Un LP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.",
        "Un CP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.",
        "Un LP, presentación de ofertas, admisión, evaluación y calificación de ofertas.",
        "Un AS, presentación de ofertas, evaluación, admisión y calificación de oferta."
        ],
        "correcta": 1,
        "solucion": "La respuesta correcta es 'Un CP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.' Para la supervisión de obra se convoca un Concurso Público (CP) y la secuencia es la indicada."
        },
        {
        "pregunta": "Servicios de Saneamiento quiere convocar __________ para la toma de inventario físico de bienes patrimoniales. La secuencia correcta de dicho procedimiento de selección es: __________",
        "alternativas": [
        "Un concurso público, presentación de ofertas, admisión, evaluación y calificación de ofertas.",
        "Una adjudicación simplificada, presentación de ofertas, admisión, evaluación y pre calificación de ofertas.",
        "Un concurso público, presentación de ofertas, admisión, calificación y evaluación de ofertas.",
        "Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas técnicas."
        ],
        "correcta": 3,
        "solucion": "La respuesta correcta es 'Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas técnicas.' Para la toma de inventario físico de bienes patrimoniales generalmente se convoca una Adjudicación Simplificada y la secuencia es la indicada."
        },
        {
        "pregunta": "Una Sociedad de Beneficencia convoca una Subasta Inversa Electrónica para la adquisición de combustible por el monto de S/. 390,000.00 y realiza una comparación de precios para adquirir bidones de agua por el monto de S/. 44,000.00 ¿Cuál es el plazo máximo que tendrían los postores para interponer apelación contra la declaración de nulidad de ambos procedimientos de selección?",
        "alternativas": [
        "En el caso de la Subasta Inversa Electrónica y en el caso de Comparación de Precios el plazo seria de cinco (5) días hábiles.",
        "En el caso de la Subasta Inversa Electrónica el plazo seria de cinco (5) días hábiles y en caso de Comparación de Precios seria el plazo seria de ocho (8) días hábiles.",
        "En el caso de la Subasta Inversa Electrónica el plazo seria de ocho (8) días hábiles y en el caso de Comparación de Precios seria de cinco (5) días hábiles.",
        "En el caso de la Subasta Inversa Electrónica y en el caso de Comparación de Precios el plazo seria de ocho (8) días hábiles."
        ],
        "correcta": 2,
        "solucion": "La respuesta correcta es 'En el caso de la Subasta Inversa Electrónica el plazo seria de ocho (8) días hábiles y en el caso de Comparación de Precios seria de cinco (5) días hábiles.' Esto se debe a que el plazo para interponer apelación varía según el tipo de procedimiento y el monto involucrado."
        },
        {
        "pregunta": "¿En cuáles de los siguientes procedimientos de selección es aplicable la siguiente secuencia? 1. Convocatoria, 2. Registro de participantes, 3. Formulación de consultas y observaciones, 4. Absolución de consultas y observaciones e Integración de bases, 5. Presentación de ofertas, 6. Apertura de ofertas técnicas, 7. Admisión de ofertas técnicas, 8.Calificacion de ofertas técnicas, 9. Evaluación de ofertas técnicas, 10. Apertura de ofertas económicas, 11. Otorgamiento de la buena pro.",
        "alternativas": [
        "La secuencia es aplicable para los concursos públicos y adjudicaciones simplificadas, tanto para la contratación de consultoría en general y consultoría de obras.",
        "La secuencia es aplicable para los concursos públicos para la contratación de servicios en general y consultoría de obras; así como de las adjudicaciones simplificadas para la contratación de consultoría en general y servicio en general.",
        "La secuencia es aplicable para los concursos públicos para la contratación de consultoría de obras y modalidad mixta; así como de las adjudicaciones simplificadas para la contratación de consultoría en general.",
        "La secuencia es aplicable para los concursos públicos para la contratación de consultoría en general y modalidad mixta; así como de las adjudicaciones simplificadas para la contratación de consultoría de obras."
        ],
        "correcta": 2,
        "solucion": "La respuesta correcta es 'La secuencia es aplicable para los concursos públicos para la contratación de consultoría de obras y modalidad mixta; así como de las adjudicaciones simplificadas para la contratación de consultoría en general.' Esta secuencia es específica para estos tipos de procedimientos de selección."
        },
        {
        "pregunta": "Establezca la relación correcta entre el número y la letra respecto a los factores de evaluación y los documentos que sirven para acreditarlos. 1.• Sistema de Gestión Ambiental, 2.- Sistema de Gestión Calidad, 3.• Capacitación del personal de la Entidad, 4.- Mejoras a los términos de referencia, a. Certificado ISO 14001, b. Certificado ISO 9001, c. Declaración Jurada.",
        "alternativas": [
        "1a,2b,3c,4c",
        "1b, 2a, 3c,4c",
        "1e, 2c, 3c, 4a",
        "1e, 2c, 3c, 4b"
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es '1a,2b,3c,4c'. El Sistema de Gestión Ambiental se acredita con el Certificado ISO 14001, el Sistema de Gestión de Calidad con el Certificado ISO 9001, y tanto la Capacitación del personal como las Mejoras a los términos de referencia se acreditan con Declaración Jurada."
        },
        {
        "pregunta": "Quién es competente para conocer y resolver un recurso de apelación cuando en una licitación pública de ejecución de obras según relación de ítems, cuyo valor referencial es mayor a 50 UIT, se impugna un ítem cuyo valor referencial es igual o menor a 50 UIT",
        "alternativas": [
        "Tribunal de contrataciones.",
        "Tribunal arbitral.",
        "Titular de la Entidad, siendo facultad indelegable.",
        "Titular de la Entidad, siendo facultad delegable."
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es 'Tribunal de contrataciones.' En una licitación pública cuyo valor referencial total es mayor a 50 UIT, aunque se impugne un ítem de valor igual o menor a 50 UIT, la competencia para resolver el recurso de apelación recae en el Tribunal de Contrataciones del Estado."
        },
        {
        "pregunta": "La interposición del recurso de apelación suspende el procedimiento de selección. Señale la alternativa correcta:",
        "alternativas": [
        "En todos los casos, salvo en el caso de un procedimiento para la incorporación de proveedores a los Catálogos Electrónicos de Acuerdo Marco o de un procedimiento de extensión de vigencia de dichos catálogos.",
        "En todos los casos sin excepción.",
        "En todos los casos, salvo en el caso de un procedimiento para la incorporación de proveedores a los Catálogos Electrónicos de Acuerdo Marco o de un procedimiento de extensión de vigencia de dichos catálogos y en un procedimiento por encargo.",
        "En todos los casos, salvo en el caso de un procedimiento para la incorporación de proveedores a los Catálogos Electrónicos de Acuerdo Marco o de un procedimiento de extensión de vigencia de dichos catálogos y de una compra corporativa obligatoria"
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es 'En todos los casos, salvo en el caso de un procedimiento para la incorporación de proveedores a los Catálogos Electrónicos de Acuerdo Marco o de un procedimiento de extensión de vigencia de dichos catálogos.' Esta es la excepción específica mencionada en la normativa de contrataciones del Estado."
        },
        {
        "pregunta": "Un Gobierno regional convoco una adjudicación simplificada para la elaboración de un Plan de desarrollo de parques industriales. Al momento de revisar las ofertas presentadas por los postores, el comité de selección no admitió la oferta de uno (1) de los postores que presento la promesa de consorcio sin consignar el porcentaje de las obligaciones de los integrantes del consorcio. Asimismo, el comité no admitió la oferta de otro postor, porque en la declaración jurada de datos no consigno correctamente su correo electrónico. Señale la alternativa correcta respecto a la verificación de los requisitos de admisibilidad de las ofertas.",
        "alternativas": [
        "El comité de selección actuó correctamente al no admitir la oferta del postor que presento la promesa de consorcio sin consignar el porcentaje de obligaciones de los integrantes del consorcio, pero debió otorgar un plazo para que el otro postor consigne el correo electrónico en la declaración jurada.",
        "El comité de selección actuó correctamente al no admitir la oferta del postor que no consigno el correo electrónico en su declaración jurada, pero debió otorgar un plazo para que el otro postor presente la promesa consorcio con el porcentaje de obligaciones de los integrantes del consorcio.",
        "El comité de selección no actuó correctamente al no admitir la oferta del postor que no consigno el correo electrónico en su declaración jurada y al no admitir la oferta del postor que presento la promesa de consorcio sin consignar el porcentaje de obligaciones de los integrantes del consorcio.",
        "El comité de selección actuó correctamente al no admitir la oferta del postor que no consigno el correo electrónico en su declaración jurada, y al no admitir la oferta del postor que presento la promesa de consorcio sin consignar el porcentaje de las obligaciones de los integrantes del consorcio."
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es 'El comité de selección actuó correctamente al no admitir la oferta del postor que presento la promesa de consorcio sin consignar el porcentaje de obligaciones de los integrantes del consorcio, pero debió otorgar un plazo para que el otro postor consigne el correo electrónico en la declaración jurada.' La falta de porcentaje en la promesa de consorcio es un error no subsanable, mientras que el error en el correo electrónico es subsanable."
        },
        {
        "pregunta": "En el supuesto que dos (2) o más ofertas que empaten en el puntaje total en el caso de __________ la determinación del orden de prelación se efectúa __________, y en el caso de __________ la determinación del orden de prelación se efectúa __________. Señale la alternativa correcta.",
        "alternativas": [
        "Concurso público para servicios en general, por sorteo, concurso público para consultoría, al postor que haya obtenido el mejor puntaje técnico.",
        "Concurso público para servicios de consultoría, por sorteo, concurso público para consultoría, al postor que haya obtenido el mejor puntaje económico.",
        "Concurso público para servicios en general, por sorteo, concurso público para consultoría, por sorteo.",
        "Concurso público para servicios en general, al postor que haya obtenido el mejor puntaje técnico, concurso público para servicios en general, por sorteo"
        ],
        "correcta": 0,
        "solucion": "La respuesta correcta es 'Concurso público para servicios en general, por sorteo, concurso público para consultoría, al postor que haya obtenido el mejor puntaje técnico.' En servicios en general se desempata por sorteo, mientras que en consultoría se prioriza al que obtuvo mejor puntaje técnico."
        },
        {
        "pregunta": "Establezca la relación correcta entre el número y la letra en relación a la competencia para resolver un recurso de apelación: 1. Titular de la Entidad, 2. Tribunal de Contrataciones del Estado, a) Cancelación de una comparación de precios por el monto de S/. 40,000.00, b) Nulidad de una subasta inversa electrónica por el monto de S/. 100,000.00, c) Declaración de desierto de una selección de consultores individuales por el monto de S/. 38,000.00, d) Otorgamiento de la buena por la adjudicación simplificada por el monto de S/. 190,000.00",
        "alternativas": [
        "1c, 1d, 2a, 2b",
        "1a, 1d, 2b, 2c",
        "1a, 1c, 2b, 2d",
        "1a, 1c, 1d, 2b"
        ],
        "correcta": 3,
        "solucion": "La respuesta correcta es '1a, 1c, 1d, 2b'. El Titular de la Entidad resuelve recursos de apelación en procedimientos de selección cuyo valor referencial sea igual o menor a 50 UIT, mientras que el Tribunal de Contrataciones del Estado resuelve los que superen ese monto."
        },
        {
          "pregunta": "El gobierno regional 'VERANO ETERNO' requiere adquirir camionetas para el área de Defensa Civil. Asimismo, el comité de selección ha contemplado el factor de evaluación 'Disponibilidad de servicios y repuestos' con un puntaje de 50 puntos.",
          "alternativas": [
          "El factor de evaluación esta incorrecto porque el puntaje máximo es de 10 puntos.",
          "Es correcto el factor de evaluación porque no supera los 50 puntos.",
          "Es incorrecto porque el factor de evaluación de disponibilidad de servicios y repuestos no existe para bienes.",
          "Es incorrecto el factor de evaluación porque debió ser requisito de calificación."
          ],
          "correcta": 2,
          "solucion": "La respuesta correcta es 'Es incorrecto porque el factor de evaluación de disponibilidad de servicios y repuestos no existe para bienes.' En la adquisición de bienes, la disponibilidad de servicios y repuestos no es un factor de evaluación válido según la normativa de contrataciones del Estado."
          },
          {
          "pregunta": "El Ministerio 'EDUCACIÓN TRANSPARENTE' ha convocado una SCI para contratar a un consultor para la elaboración de la curricula pedagógica. Asimismo, el Comité de Selección ha incluido como factor de evaluación 'Experiencia del Postor' con 60 puntos.",
          "alternativas": [
          "Es incorrecto ya que experiencia del postor es un requisito de calificación.",
          "Es incorrecto ya que el puntaje máximo debe ser 50 puntos.",
          "Es incorrecto porque el puntaje máximo debe ser 10 puntos.",
          "Es correcto."
          ],
          "correcta": 0,
          "solucion": "La respuesta correcta es 'Es incorrecto ya que experiencia del postor es un requisito de calificación.' En una Selección de Consultores Individuales (SCI), la experiencia del postor es un requisito de calificación y no un factor de evaluación."
          },
          {
          "pregunta": "El Ministerio 'SIN DELINCUENCIA' ha convocado una AS para el servicio de mantenimiento de vehículos. Asimismo, el Comité de Selección ha incluido como factor de evaluación 'Mejoras' con un puntaje de 10 puntos.",
          "alternativas": [
          "Es correcto.",
          "Es incorrecto porque el factor 'Mejoras' no existe para el caso de servicios.",
          "Es incorrecto porque el factor 'Mejoras' no existe para la AS.",
          "Es correcto porque no supera los 10 puntos."
          ],
          "correcta": 0,
          "solucion": "La respuesta correcta es 'Es correcto.' En una Adjudicación Simplificada (AS) para servicios, las 'Mejoras' pueden ser incluidas como factor de evaluación, y el puntaje de 10 puntos está dentro de lo permitido por la normativa."
          },
          {
          "pregunta": "El gobierno regional 'LOS SANTOS' en el SEACE han rectificado las bases y el resumen ejecutivo, corrigiendo los datos erróneos. Señale la alternativa correcta.",
          "alternativas": [
          "La entidad no actuó correctamente porque no se puede rectificar el contenido de las bases ni del resumen ejecutivo.",
          "La Entidad actuó correctamente porque se puede rectificar la información registrada en el SEACE, siempre y cuando lo realice antes del inicio de la presentación de ofertas",
          "La entidad no actuó correctamente porque no se puede rectificar ninguna información del procedimiento de selección registrada en el SEACE.",
          "La Entidad no actuó correctamente porque no se puede rectificar la información registrada en el SEACE, siempre y cuando lo realice antes del inicio de la integración de bases."
          ],
          "correcta": 1,
          "solucion": "La respuesta correcta es 'La Entidad actuó correctamente porque se puede rectificar la información registrada en el SEACE, siempre y cuando lo realice antes del inicio de la presentación de ofertas'. La normativa permite rectificar la información en el SEACE antes de la presentación de ofertas."
          },
          {
            "pregunta": "Para la contratación del servicio de Internet, el Titular de la Entidad declaró la nulidad del procedimiento porque el comité de selección incluyó en las bases como factores de evaluación la disponibilidad de servicio y repuestos. Al respecto, señale la alternativa correcta.",
            "alternativas": [
            "Se vulneró el principio ético de eficiencia del servidor público al establecer como factor de evaluación la disponibilidad de servicio y repuestos.",
            "No se vulneró ningún principio ético del servidor público",
            "Se vulneró el principio ético de idoneidad del servidor público al establecer como factor de evaluación la experiencia del postor.",
            "Se vulneró el principio ético de veracidad del servidor público al establecer como factor de evaluación la disponibilidad de servicio y repuestos."
            ],
            "correcta": 0,
            "solucion": "La respuesta correcta es 'Se vulneró el principio ético de eficiencia del servidor público al establecer como factor de evaluación la disponibilidad de servicio y repuestos.' Este factor de evaluación no es apropiado para el servicio de Internet, lo que va en contra del principio de eficiencia en las contrataciones públicas. Este tema se aborda en las páginas 12-13 del material de estudio, donde se discuten los principios éticos del servidor público."
            },
            {
            "pregunta": "Con relación a las opiniones y pronunciamientos del OSCE, y las resoluciones del Tribunal de contrataciones del Estado, señale la alternativa correcta.",
            "alternativas": [
            "Las opiniones emitidas por el OSCE son de carácter vinculante para todos los procedimientos de selección.",
            "Las resoluciones del Tribunal y las opiniones emitidas por el OSCE son de carácter vinculante para todos los procedimientos de selección.",
            "Las opiniones y los pronunciamientos emitidos por el OSCE son de carácter vinculante para todos los procedimientos de selección.",
            "Los pronunciamientos y las opiniones emitidas por el OSCE y las resoluciones del Tribunal son de carácter vinculante para todos los procedimientos de selección."
            ],
            "correcta": 1,
            "solucion": "La respuesta correcta es 'Las resoluciones del Tribunal y las opiniones emitidas por el OSCE son de carácter vinculante para todos los procedimientos de selección.' Tanto las resoluciones del Tribunal como las opiniones del OSCE tienen carácter vinculante en el ámbito de las contrataciones públicas. Este tema se trata en la página 64 del material de estudio, donde se habla de los precedentes de observancia obligatoria y las opiniones del OSCE."
            },
            {
            "pregunta": "Una Municipalidad provincial declara la nulidad de una licitación pública antes de otorgar la buena pro, debido a que el objeto de la contratación correspondía a un servicio en general. Un participante interpone un recurso de apelación porque no está de acuerdo con dicha declaratoria. ¿Cómo debería resolverse el recurso de apelación?",
            "alternativas": [
            "El recurso de apelación debe ser declarado fundado porque la Entidad no actuó correctamente al declarar la nulidad del procedimiento de selección.",
            "El recurso de apelación debe ser declarado infundado porque la Entidad debió cancelar el procedimiento de selección porque todavía no se había otorgado la buena pro.",
            "El recurso de apelación debe ser declarado infundado porque la Entidad actuó correctamente al declarar la nulidad del procedimiento de selección.",
            "El recurso de apelación debe ser declarado improcedente porque un participante no puede interponer dicho recurso, sino solamente los postores."
            ],
            "correcta": 2,
            "solucion": "La respuesta correcta es 'El recurso de apelación debe ser declarado infundado porque la Entidad actuó correctamente al declarar la nulidad del procedimiento de selección.' La Entidad actuó correctamente al declarar la nulidad si el objeto de la contratación no correspondía al tipo de procedimiento convocado. Este tema se aborda en las páginas 59-60 del material de estudio, donde se discuten los recursos de apelación y las causales de nulidad."
            },
            {
            "pregunta": "Una Universidad quiere convocar __________ para la contratación de seguridad y vigilancia. La secuencia correcta de dicho procedimiento de selección es: __________, __________ y __________",
            "alternativas": [
            "Un concurso público, presentación de ofertas, admisión, calificación y evaluación de ofertas.",
            "Un concurso público, presentación de ofertas, admisión, evaluación y calificación de ofertas.",
            "Una adjudicación simplificada, presentación de ofertas, admisión, calificación y evaluación de ofertas.",
            "Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas."
            ],
            "correcta": 1,
            "solucion": "La respuesta correcta es 'Un concurso público, presentación de ofertas, admisión, evaluación y calificación de ofertas.' Para la contratación de servicios de seguridad y vigilancia, generalmente se convoca un concurso público, y la secuencia correcta es la mencionada. Esta información se puede encontrar en las páginas 45-46 del material de estudio, donde se describen los procedimientos de selección y sus etapas."
            },
            {
            "pregunta": "Una Universidad quiere convocar __________ para la contratación de una adquisición de uniformes. La secuencia correcta de dicho procedimiento de selección es: __________, __________ y __________",
            "alternativas": [
            "Una Licitación Pública, presentación de ofertas, admisión, calificación y evaluación de ofertas.",
            "Una Licitación Pública, presentación de ofertas, admisión, evaluación y calificación de ofertas.",
            "Una adjudicación simplificada, presentación de ofertas, admisión, calificación y evaluación de ofertas.",
            "Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas."
            ],
            "correcta": 1,
            "solucion": "La respuesta correcta es 'Una Licitación Pública, presentación de ofertas, admisión, evaluación y calificación de ofertas.' Para la adquisición de uniformes, dependiendo del monto, se puede convocar una Licitación Pública, y la secuencia correcta es la mencionada. Esta información se puede encontrar en las páginas 45-46 del material de estudio, donde se describen los procedimientos de selección y sus etapas."
            },
            {
            "pregunta": "En __________ el plazo para absolver las consultas y observaciones no puede exceder de __________",
            "alternativas": [
            "AS, 5 días hábiles",
            "CP, 5 días hábiles",
            "AS, 7 días hábiles",
            "CP, 7 días hábiles"
            ],
            "correcta": 3,
            "solucion": "La respuesta correcta es 'CP, 7 días hábiles'. En un Concurso Público (CP), el plazo para absolver las consultas y observaciones no puede exceder de 7 días hábiles. Esta información se encuentra en la página 46 del material de estudio, donde se detallan los plazos para los diferentes procedimientos de selección."
            },
            {
            "pregunta": "Qué datos se debe registrar y publicar en la consola de selección del SEACE al realizar la cancelación total o parcial de un procedimiento de selección",
            "alternativas": [
            "Se puede adjuntar el archivo de la resolución o el acuerdo cancelatorio.",
            "Se puede adjuntar el archivo de la resolución y se debe registrar el acuerdo cancelatorio.",
            "Se debe adjuntar el archivo de la resolución o el acuerdo cancelatorio.",
            "Se debe adjuntar el archivo de la resolución y se puede adjuntar el acuerdo cancelatorio."
            ],
            "correcta": 2,
            "solucion": "La respuesta correcta es 'Se debe adjuntar el archivo de la resolución o el acuerdo cancelatorio.' Según la normativa, es obligatorio adjuntar el documento que sustenta la cancelación, ya sea la resolución o el acuerdo cancelatorio. Esta información se puede encontrar en la página 54 del material de estudio, donde se habla sobre la cancelación de procedimientos de selección."
            },
            {
            "pregunta": "Una Entidad cancela una adjudicación simplificada cuyo valor estimado es S/. 100,000, por desaparecer la necesidad. Un postor que no está de acuerdo con la cancelación interpone un recurso de apelación ante el Tribunal de Contrataciones. ¿Cómo debería resolverse dicho recurso?",
            "alternativas": [
            "El recurso de apelación debe ser declarado fundado, porque no se configuro ninguna causal para cancelar el procedimiento de selección.",
            "El recurso de apelación debe ser declarado improcedente por haberse interpuesto ante el Tribunal de Contrataciones.",
            "El recurso de apelación debe ser declarado procedente porque la cancelación del procedimiento de selección se llevó a cabo correctamente.",
            "El recurso de apelación debe ser declarado infundado por haberse interpuesto ante el Tribunal de Contrataciones."
            ],
            "correcta": 1,
            "solucion": "La respuesta correcta es 'El recurso de apelación debe ser declarado improcedente por haberse interpuesto ante el Tribunal de Contrataciones.' Para un valor estimado de S/. 100,000, el recurso de apelación debe presentarse ante la Entidad, no ante el Tribunal de Contrataciones. Esta información se puede encontrar en la página 59 del material de estudio, donde se explica la competencia para conocer los recursos de apelación."
            },
            {
            "pregunta": "Si una Entidad contrata una supervisión de obra por un valor referencial de S/. 700,000.00 ¿Qué procedimiento de selección debe convocar?",
            "alternativas": [
            "Licitación Pública.",
            "Concurso Público.",
            "Comparación de precios.",
            "Adjudicación simplificada."
            ],
            "correcta": 1,
            "solucion": "La respuesta correcta es 'Concurso Público.' Para la contratación de servicios de consultoría de obras (como la supervisión) por un monto superior a S/. 400,000, se debe convocar un Concurso Público. Esta información se encuentra en la página 40 del material de estudio, donde se describen los tipos de procedimientos de selección según los montos."
            },
            {
            "pregunta": "Si una Entidad contrata la construcción de un colegio por un valor referencial de S/. 800,000.00 ¿Qué procedimiento de selección debe convocar?",
            "alternativas": [
            "Licitación Pública.",
            "Concurso Público.",
            "Comparación de precios.",
            "Adjudicación simplificada."
            ],
            "correcta": 3,
            "solucion": "La respuesta correcta es 'Adjudicación simplificada.' Para la ejecución de obras con un valor referencial entre S/. 400,000 y S/. 1,800,000, se debe convocar una Adjudicación Simplificada. Esta información se encuentra en la página 40 del material de estudio, donde se describen los tipos de procedimientos de selección según los montos."
            },
            {
            "pregunta": "Si una Entidad contrata el servicio de pintado por un valor estimado de S/. 400,000.00 ¿Qué procedimiento de selección debe convocar?",
            "alternativas": [
            "Licitación Pública.",
            "Comparación de precios.",
            "Concurso Público.",
            "Adjudicación simplificada."
            ],
            "correcta": 3,
            "solucion": "La respuesta correcta es 'Adjudicación simplificada.' Para la contratación de servicios con un valor estimado entre S/. 34,400 y S/. 400,000, se debe convocar una Adjudicación Simplificada. Esta información se encuentra en la página 40 del material de estudio, donde se describen los tipos de procedimientos de selección según los montos."
            },
            {
            "pregunta": "Si una Entidad contrata la construcción de un puente por un valor referencial de S/. 1,800,000.00 ¿Qué procedimiento de selección debe convocar?",
            "alternativas": [
            "Licitación Pública.",
            "Concurso Público.",
            "Comparación de precios.",
            "Adjudicación simplificada."
            ],
            "correcta": 0,
            "solucion": "La respuesta correcta es 'Licitación Pública.' Para la ejecución de obras con un valor referencial igual o superior a S/. 1,800,000, se debe convocar una Licitación Pública. Esta información se encuentra en la página 40 del material de estudio, donde se describen los tipos de procedimientos de selección según los montos."
            },
            {
            "pregunta": "En la AS para la contratación de bienes y servicios en general, el plazo entre la etapa de absolución de consultas y observaciones e integración de bases, y la presentación de ofertas, no debe ser menor a __________.",
            "alternativas": [
            "5 días hábiles.",
            "3 días hábiles.",
            "7 días hábiles.",
            "10 días hábiles."
            ],
            "correcta": 1,
            "solucion": "La respuesta correcta es '3 días hábiles.' En una Adjudicación Simplificada (AS) para bienes y servicios en general, el plazo entre la absolución de consultas y observaciones e integración de bases, y la presentación de ofertas, no debe ser menor a 3 días hábiles. Esta información se encuentra en la página 47 del material de estudio, donde se detallan los plazos para los diferentes procedimientos de selección."
            },
            {
            "pregunta": "En el CP para la contratación de consultorías, el plazo para formular consultas y observaciones, no debe ser menor a __________.",
            "alternativas": [
            "5 días hábiles.",
            "3 días hábiles.",
            "7 días hábiles.",
            "10 días hábiles."
            ],
            "correcta": 2,
            "solucion": "La respuesta correcta es '7 días hábiles.' En un Concurso Público (CP) para la contratación de consultorías, el plazo para formular consultas y observaciones no debe ser menor a 7 días hábiles. Esta información se encuentra en la página 46 del material de estudio, donde se detallan los plazos para los diferentes procedimientos de selección."
            },
            {
              "pregunta": "En la AS para la contratación de ejecución de obras, el plazo para absolver consultas y observaciones e integrar las bases, no debe ser mayor a __________.",
              "alternativas": [
              "5 días hábiles.",
              "3 días hábiles.",
              "7 días hábiles.",
              "10 días hábiles."
              ],
              "correcta": 0,
              "solucion": "La respuesta correcta es '5 días hábiles.' En una Adjudicación Simplificada (AS) para la ejecución de obras, el plazo para absolver consultas y observaciones e integrar las bases no debe ser mayor a 5 días hábiles. Esta información se encuentra en la página 47 del material de estudio, donde se detallan los plazos para los diferentes procedimientos de selección."
              },
              {
              "pregunta": "Una Entidad quiere convocar __________ para la elaboración de un estudio de impacto ambiental. La secuencia correcta de dicho procedimiento de selección es: __________",
              "alternativas": [
              "Un LP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.",
              "Un LP, presentación de ofertas, admisión, evaluación y calificación de ofertas.",
              "Un CP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.",
              "Un AS, presentación de ofertas, evaluación, admisión y calificación de oferta."
              ],
              "correcta": 2,
              "solucion": "La respuesta correcta es 'Un CP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.' Para la elaboración de un estudio de impacto ambiental, que es una consultoría, se convoca un Concurso Público (CP) y la secuencia es la indicada. Esta información se puede encontrar en las páginas 45-46 del material de estudio, donde se describen los procedimientos de selección y sus etapas para diferentes tipos de contrataciones."
              },
              {
              "pregunta": "Una Entidad quiere convocar __________ para la adquisición de productos para el programa de vaso de leche. La secuencia correcta de dicho procedimiento de selección es: __________",
              "alternativas": [
              "Un LP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.",
              "Un LP, presentación de ofertas, admisión, evaluación y calificación de ofertas.",
              "Un CP, presentación de ofertas, admisión, calificación y evaluación de ofertas técnicas.",
              "Un AS, presentación de ofertas, evaluación, admisión y calificación de oferta."
              ],
              "correcta": 1,
              "solucion": "La respuesta correcta es 'Un LP, presentación de ofertas, admisión, evaluación y calificación de ofertas.' Para la adquisición de productos para el programa de vaso de leche, dependiendo del monto, se convoca una Licitación Pública (LP) y la secuencia es la indicada. Esta información se puede encontrar en las páginas 45-46 del material de estudio, donde se describen los procedimientos de selección y sus etapas para diferentes tipos de contrataciones."
              }
]
//pagina 37

const Timer = dynamic(() => Promise.resolve(() => {
  
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-4 right-4 bg-white p-2 rounded shadow-md z-50">
      <p className="text-lg font-bold">{formatTime(time)}</p>
    </div>
  );
}), { ssr: false });

export default function Home() {
  const [numQuestionsInput, setNumQuestionsInput] = useState('78');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({});
  const [showTimer, setShowTimer] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const generateQuestions = () => {
    const numQuestions = parseInt(numQuestionsInput);
    if (isNaN(numQuestions) || numQuestions <= 0 || numQuestions > quizData.length) {
      alert(`Por favor, ingrese un número válido entre 1 y ${quizData.length}.`);
      return;
    }
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, numQuestions));
    setAnswers({});
    setShowSolutions({});
    setShowTimer(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setNumQuestionsInput(value);
    }
  };

  const handleAnswerSelect = (questionIndex: number, selectedAnswer: number) => {
    const updatedAnswers = { ...answers, [questionIndex]: selectedAnswer };
    setAnswers(updatedAnswers);

    const question = questions[questionIndex];
    if (selectedAnswer === question.correcta) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    } else {
      setShowSolutions({ ...showSolutions, [questionIndex]: true });
    }
  };

  return (
    <div className="container mx-auto p-4 relative">
      {showTimer && <Timer />}
      {showConfetti && <ConfettiComponent />}
      <h1 className="text-2xl font-bold mb-4">Preguntas para la Certificacion - OSCE</h1>
      <div className="mb-4">
        <div className="flex items-center space-x-4 mb-2">
          <label htmlFor="numQuestions" className="mr-2">
            Número de preguntas:
          </label>
          <input
            type="text"
            id="numQuestions"
            value={numQuestionsInput}
            onChange={handleInputChange}
            className="border rounded px-2 py-1"
          />
        </div>
        <button
          onClick={generateQuestions}
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Generar Preguntas
        </button>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="mb-6 p-4 border rounded" style={{ background: 'rgb(226, 226, 226)' }}>
          <p className="font-semibold mb-2">{question.pregunta}</p>
          <div className="space-y-2">
            {question.alternativas.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleAnswerSelect(index, optionIndex)}
                className={`block w-full text-left p-2 border rounded ${
                  answers[index] === optionIndex
                    ? optionIndex === question.correcta
                      ? 'bg-green-200'
                      : 'bg-red-200'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {showSolutions[index] && (
            <div className="mt-2 p-2 bg-yellow-100 border border-yellow-400 rounded">
              <p className="text-sm">{question.solucion}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}