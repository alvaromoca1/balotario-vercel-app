'use client';

import React, { useState } from 'react';

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
        }
]
//pagina 20

export default function Home() {
  const [numQuestionsInput, setNumQuestionsInput] = useState('78');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({});

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
    if (selectedAnswer !== question.correcta) {
      setShowSolutions({ ...showSolutions, [questionIndex]: true });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Preguntas para la Certificacion - OSCE</h1>
      <div className="mb-4 flex items-center space-x-4">
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
        <button
          onClick={generateQuestions}
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Generar Preguntas
        </button>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="mb-6 p-4 border rounded">
          <p className="font-semibold mb-2">{question.pregunta}</p>
          <div className="space-y-2">
            {question.alternativas.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleAnswerSelect(index, optionIndex)}
                className={`block w-full text-left p-2 rounded ${
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