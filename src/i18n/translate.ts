import { personalData } from '../core/data/personal-data';
import menuItems from '../core/data/menuItems';
import { type PersonalData } from '../core/interfaces/personal-data.interface';
import { type MenuItem } from '../core/interfaces/menu-item.interface';
import { type Status } from '../core/interfaces/personal-data.interface';

const presentacionCorta =
  'Soy Alex Coronell, un desarrollador full-stack con un fuerte enfoque en tecnologías front-end. Me especializo en crear interfaces precisas y fáciles de usar utilizando Angular, React y Astro, mejorando constantemente las experiencias web con código eficiente. Mi experiencia se extiende al desarrollo backend, trabajando con NestJS y NodeJS para crear soluciones confiables del lado del servidor.';
const tituloPresentacionLarga =
  'Los píxeles son mi pasión, los servidores mi patio de recreo: ¡Conoce a Alex Coronell!';
const presentationLarga = [
  'Soy Alex Coronell, un desarrollador full-stack con alma front-end. Como arquitecto digital, esculpo interfaces con píxeles perfectos usando Angular, React y la estrella en ascenso, Astro, ampliando los límites de las experiencias web con cada línea de código. Pero no se deje engañar por la llamativa fachada del front-end: también soy aprendiz de backend y descifro la magia de NestJS y NodeJS para construir bases sólidas del lado del servidor.',
  'Mientras mejoro mis habilidades de backend, mi dedicación a ofrecer soluciones completas e integrales se mantiene firme. Enfoco la codificación como una combinación de lógica y creatividad, afrontando desafíos con soluciones innovadoras. Mi trabajo abarca desde desarrollar interfaces de usuario atractivas hasta resolver complejidades de backend y explorar aplicaciones de escritorio con Electron.',
  'Como desarrollador, disfruto de la colaboración y el aprendizaje continuo. Mi viaje tecnológico apenas comienza, impulsado por la curiosidad y la determinación. Ya sea que necesite un experto en front-end para hacer realidad su visión digital, un desarrollador backend en formación o un miembro apasionado del equipo, estoy listo para contribuir. ¡Construyamos juntos algo excepcional!',
];

/* Titles in experiences */
const catapultSteelBuildingTitle = 'Desarrollador Fullstack, Coordinador de IT';
const micropointTitle = 'Analista de Soporte en Sitio';
const alianzaGraficaTitle =
  'Diseñador Gráfico - Servicio Técnico Konica Minolta';
const gloditecTitle = 'Soporte Técnico en Impresoras';
const propcTitle = 'Director Soporte Técnico';
const atbTitle = 'Coordinador de Sistemas (IT)';
const avilaTvTitle = 'Practicante (Asistente de Producción)';
const retcaTitle = 'Asistente de Sistemas';
const tecnocorsaTitle = 'Técnico en Informática';
const hydroclimaTitle = 'Transcriptor de Datos';

const catapultSteelBuildingDateBegin = 'Julio 2021';
const micropointDateBegin = 'Septiembre 2018';
const alianzaGraficaDateBegin = 'Febrero 2017';
const gloditecDateBegin = 'Mayo 2016';
const propcDateBegin = 'Abril 2014';
const atbDateBegin = 'Julio 2011';
const avilaTvDateBegin = 'Abril 2011';
const retcaDateBegin = 'Agosto 2004';
const tecnocorsaDateBegin = 'Enero 1998';
const hydroclimaDateBegin = 'Enero 1997';

const catapultSteelBuildingDateEnd = 'Actualmente';
const micropointDateEnd = 'Julio 2021';
const alianzaGraficaDateEnd = 'Diciembre 2017';
const gloditecDateEnd = 'December 2016';
const propcDateEnd = 'Febrero 2016';
const atbDateEnd = 'Enero 2014';
const avilaTvDateEnd = 'Julio 2011';
const retcaDateEnd = 'Noviembre 2010';
const tecnocorsaDateEnd = 'Diciembre 2003';
const hydroclimaDateEnd = 'Diciembre 1997';

/* Functions in experiences */
const catapultSteelBuildingFunctions = [
  'Desarrollador web de las páginas oficiales de la empresa en tecnologías como Astro, Angular y React.',
  'Desarrollador de un robot de compras automatizado utilizando ElectronJS.',
  'Desarrollador completo de una solución CMR para gestionar clientes, clientes potenciales y generar cotizaciones. En desarrollo con NestJS, Angular y Postgres.',
  'Administración de dominios y hosting.',
  'Administración del sistema CRM SuiteCRM.',
  'Administración de AWS.',
];
const micropointFunctions = [
  'Gerente Regional de TI de la empresa Totto en Antioquia.',
  'Helpdesk y soporte en sitio para Grupo Uribe.',
  'Apoyo a la implementación del Centro de Servicios Digitales de Sura.',
  'Servicio técnico para impresoras láser, ordenadores de sobremesa y portátiles.',
  'Servicio al Cliente.',
];

const alianzaGraficaFunctions = [
  'Preparación y ajuste de diseños para el proceso de impresión digital.',
  'Uso de Adobe Illustrator, Adobe InDesign, Adobe Acrobat, Adobe Photoshop, Enfocus PitStop Pro y Kodak Preps 5.3.',
  'Uso del controlador Konica Job Center y la estación de trabajo Fiery Command.',
  'Operación de equipos de impresión Konica Minolta Bizhub Press C6000 y Konica Minolta Bizhub Press C1085.',
  'Realización de mantenimiento preventivo y correctivo en las impresoras Konica Minolta Bizhub Press C6000 y Konica Minolta Bizhub Press C1085.',
];

const gloditecFunctions = [
  'Reparación y mantenimiento de impresoras Ricoh, Konica Minolta y Sindoh.',
  'Instalación de impresoras en redes corporativas.',
  'Configuración de impresoras básicas y multifuncionales en equipos informáticos.',
];

const propcFunctions = [
  'Gestión de compras e inventarios.',
  'Coordinación en la implementación, instalación y puesta en marcha de los equipos de computación y tecnología adquiridos por nuestros clientes corporativos.',
];

const atbFunctions = [
  'Administración de redes cableadas e inalámbricas.',
  'Administración de BladeCenter.',
  'Administración de servidores Linux, Windows Server 2008, Windows Server 2012 (Active Directory, Servidor DHCP, Servidor de Impresión, DNS).',
  'Administración de SQL Server 2008R2.',
  'Administración básica de MySQL (Copias de seguridad)',
  'Gestión de impresoras.',
  'Sincronización de bases de datos.',
  'Soporte técnico de equipos de cómputo e impresoras.',
  'Compras de consumibles y equipos.',
];

const avilaTvFunctions = [
  'Asistente de producción',
  'Impresión y distribución de guiones técnicos y literales',
  'Asistencia en el proceso de edición de vídeo',
  'Asistencia en entrevistas de campo',
];

const retcaFunctions = [
  'Encargado del Departamento de Sistemas en sucursal y de la generación e impresión de facturas y notas de crédito y débito en las líneas Samsung, Aiwa, Haier, Scott-Tamashi.',
  'Operador de sistemas HP3000 y PeopleSoft-JDE.',
  'Soporte técnico para usuarios.',
  'Reparación y mantenimiento de equipos informáticos.',
  'Asistente en la administración de redes locales, remotas e inalámbricas.',
  'Administración del enrutador.',
  'Mantenimiento preventivo y correctivo de impresoras',
];

const tecnocorsaFunctions = [
  'Generación e impresión de facturas.',
  'Operador Saint Administrativo.',
  'Relación de compras y ventas para el cálculo del pago del I.S.L.V. (I.V.A.).',
  'Rellenar formularios de pago de impuestos.',
];

const hydroclimaFunctions = [
  'Codificación de carpetas para su posterior carga en el sistema contable computarizado.',
  'Operador del sistema de contabilidad.',
  'Conciliación bancaria.',
  'Archivo de facturas de compra y venta.',
  'Relación para el pago del I.S.L.V. (Impuesto sobre las ventas)',
];

export const translate = (lang: string): PersonalData => {
  if (lang === 'es') {
    const personalDataEs = personalData;
    personalDataEs.shortPresentation = presentacionCorta;
    personalDataEs.titleLongPresentation = tituloPresentacionLarga;
    personalDataEs.longPresentation = presentationLarga;

    /* Functions */
    personalDataEs.experiences[indexExperience(10)].functions =
      catapultSteelBuildingFunctions;
    personalDataEs.experiences[indexExperience(9)].functions =
      micropointFunctions;
    personalDataEs.experiences[indexExperience(8)].functions =
      alianzaGraficaFunctions;
    personalDataEs.experiences[indexExperience(7)].functions =
      gloditecFunctions;
    personalDataEs.experiences[indexExperience(6)].functions = propcFunctions;
    personalDataEs.experiences[indexExperience(5)].functions = atbFunctions;
    personalDataEs.experiences[indexExperience(4)].functions = avilaTvFunctions;
    personalDataEs.experiences[indexExperience(3)].functions = retcaFunctions;
    personalDataEs.experiences[indexExperience(2)].functions =
      tecnocorsaFunctions;
    personalDataEs.experiences[indexExperience(1)].functions =
      hydroclimaFunctions;

    /* Titles */
    personalDataEs.experiences[indexExperience(10)].title =
      catapultSteelBuildingTitle;
    personalDataEs.experiences[indexExperience(9)].title = micropointTitle;
    personalDataEs.experiences[indexExperience(8)].title = alianzaGraficaTitle;
    personalDataEs.experiences[indexExperience(7)].title = gloditecTitle;
    personalDataEs.experiences[indexExperience(6)].title = propcTitle;
    personalDataEs.experiences[indexExperience(5)].title = atbTitle;
    personalDataEs.experiences[indexExperience(4)].title = avilaTvTitle;
    personalDataEs.experiences[indexExperience(3)].title = retcaTitle;
    personalDataEs.experiences[indexExperience(2)].title = tecnocorsaTitle;
    personalDataEs.experiences[indexExperience(1)].title = hydroclimaTitle;

    /* Date Begin */
    personalDataEs.experiences[indexExperience(10)].dateBegin =
      catapultSteelBuildingDateBegin;
    personalDataEs.experiences[indexExperience(9)].dateBegin =
      micropointDateBegin;
    personalDataEs.experiences[indexExperience(8)].dateBegin =
      alianzaGraficaDateBegin;
    personalDataEs.experiences[indexExperience(7)].dateBegin =
      gloditecDateBegin;
    personalDataEs.experiences[indexExperience(6)].dateBegin = propcDateBegin;
    personalDataEs.experiences[indexExperience(5)].dateBegin = atbDateBegin;
    personalDataEs.experiences[indexExperience(4)].dateBegin = avilaTvDateBegin;
    personalDataEs.experiences[indexExperience(3)].dateBegin = retcaDateBegin;
    personalDataEs.experiences[indexExperience(2)].dateBegin =
      tecnocorsaDateBegin;
    personalDataEs.experiences[indexExperience(1)].dateBegin =
      hydroclimaDateBegin;

    /* Date End */
    personalDataEs.experiences[indexExperience(10)].dateEnd =
      catapultSteelBuildingDateEnd;
    personalDataEs.experiences[indexExperience(9)].dateEnd = micropointDateEnd;
    personalDataEs.experiences[indexExperience(8)].dateEnd =
      alianzaGraficaDateEnd;
    personalDataEs.experiences[indexExperience(7)].dateEnd = gloditecDateEnd;
    personalDataEs.experiences[indexExperience(6)].dateEnd = propcDateEnd;
    personalDataEs.experiences[indexExperience(5)].dateEnd = atbDateEnd;
    personalDataEs.experiences[indexExperience(4)].dateEnd = avilaTvDateEnd;
    personalDataEs.experiences[indexExperience(3)].dateEnd = retcaDateEnd;
    personalDataEs.experiences[indexExperience(2)].dateEnd = tecnocorsaDateEnd;
    personalDataEs.experiences[indexExperience(1)].dateEnd = hydroclimaDateEnd;
    return personalDataEs;
  } else {
    return personalData;
  }
};

export const translateMenu = (lang: string) => {
  if (lang === 'es') {
    const menuItemsEs: MenuItem[] = [
      { name: 'Acerca de Mi', url: '#AcercaDeMi' },
      { name: 'Habilidades', url: '#Habilidades' },
      { name: 'Aprendiendo', url: '#Aprendiendo' },
      { name: 'Portafolio', url: '#Portafolio' },
      { name: 'Experiencia', url: '#Experiencias' },
      { name: 'Contacto', url: '#Contacto' },
    ];
    return menuItemsEs;
  } else {
    return menuItems;
  }
};

export const translateStatusWork = (status: Status, lang: string): string => {
  if (!lang) return status;
  switch (status) {
    case 'active':
      return 'Activo';
    case 'inactive':
      return 'Inactivo';
    case 'Developing':
      return 'En Desarrollo';
    default:
      return status;
  }
};

const indexExperience = (order: number) =>
  personalData.experiences.map(item => item.order).indexOf(order);
