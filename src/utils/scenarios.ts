import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: '1',
    title: 'Mantenimiento de Bomba Centrífuga',
    description: 'Aprende el procedimiento correcto para el mantenimiento preventivo de una bomba centrífuga industrial.',
    category: 'maintenance'
  },
  {
    id: '2',
    title: 'Fuga en Sistema Hidráulico',
    description: 'Simula la respuesta correcta ante una fuga de presión en el sistema hidráulico.',
    category: 'emergency'
  },
  {
    id: '3',
    title: 'Calibración de Sensores',
    description: 'Practica el proceso de calibración de sensores industriales.',
    category: 'operation'
  },
  {
    id: '4',
    title: 'Protocolo de Seguridad Eléctrica',
    description: 'Aprende los procedimientos de seguridad para trabajar con equipos eléctricos de alta tensión.',
    category: 'safety'
  },
  {
    id: '5',
    title: 'Mantenimiento de Compresores',
    description: 'Guía paso a paso para el mantenimiento y diagnóstico de compresores industriales.',
    category: 'maintenance'
  },
  {
    id: '6',
    title: 'Control de Calidad en Línea',
    description: 'Procedimientos para realizar control de calidad en líneas de producción.',
    category: 'operation'
  },
  {
    id: '7',
    title: 'Respuesta a Incendios',
    description: 'Protocolo de respuesta ante incendios en instalaciones industriales.',
    category: 'emergency'
  },
  {
    id: '8',
    title: 'Operación de Grúa Puente',
    description: 'Certificación en la operación segura de grúas puente industriales.',
    category: 'operation'
  }
];

export const getScenarioResponse = (message: string, currentScenario: Scenario | null): string => {
  const lowerMessage = message.toLowerCase();
  
  if (!currentScenario) {
    return "Por favor, selecciona un escenario de entrenamiento para comenzar.";
  }

  if (currentScenario.category === 'maintenance') {
    if (lowerMessage.includes('primer paso') || lowerMessage.includes('comenzar')) {
      return "El primer paso es verificar que el equipo esté completamente desenergizado y bloqueado según el procedimiento LOTO (Lock Out/Tag Out). ¿Qué harías después?";
    }
    if (lowerMessage.includes('desmontar') || lowerMessage.includes('desarmar')) {
      return "Antes de desmontar, asegúrate de tener todas las herramientas necesarias y documenta la posición de cada componente. ¿Tienes el manual de mantenimiento a mano?";
    }
    if (lowerMessage.includes('herramientas') || lowerMessage.includes('manual')) {
      return "Excelente. Para este mantenimiento necesitarás: llaves ajustables, destornilladores, multímetro y el manual técnico. ¿Qué elemento verificarías primero?";
    }
  }

  if (currentScenario.category === 'emergency') {
    if (lowerMessage.includes('fuga') || lowerMessage.includes('presión')) {
      return "En caso de fuga, el primer paso es activar el paro de emergencia y notificar al supervisor. ¿Conoces la ubicación del botón de paro de emergencia más cercano?";
    }
    if (lowerMessage.includes('incendio') || lowerMessage.includes('fuego')) {
      return "Ante un incendio: 1) Activa la alarma, 2) Notifica a brigada de emergencia, 3) Usa el extintor si es seguro hacerlo. ¿Conoces el tipo de extintor adecuado para cada clase de incendio?";
    }
  }

  if (currentScenario.category === 'operation') {
    if (lowerMessage.includes('calibración') || lowerMessage.includes('sensor')) {
      return "Para calibrar sensores industriales, primero necesitamos verificar las especificaciones del fabricante y tener el equipo de calibración adecuado. ¿Qué tipo de sensor vamos a calibrar?";
    }
    if (lowerMessage.includes('grúa') || lowerMessage.includes('puente')) {
      return "Antes de operar la grúa puente, debemos realizar una inspección visual completa. ¿Cuáles son los puntos clave a revisar?";
    }
  }

  if (currentScenario.category === 'safety') {
    if (lowerMessage.includes('eléctrico') || lowerMessage.includes('tensión')) {
      return "Para trabajar con equipos eléctricos de alta tensión, primero verifica tener el EPP adecuado: guantes dieléctricos, botas aislantes, y pértiga. ¿Qué más necesitas verificar?";
    }
  }

  return "Entiendo. ¿Podrías explicar más detalladamente lo que intentas hacer?";
};