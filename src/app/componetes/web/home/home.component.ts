import { Component, OnInit, EventEmitter, Output,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { register} from 'swiper/element/bundle';

register();
export interface ExpandedSections {
  quienesSomos: boolean;
  // Agrega más propiedades aquí si tienes más secciones
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      state('collapsed', style({
        height: '0',
        opacity: 0
      })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit  {

  mostrarCalendario = false;
  
  /* informacion */
  cards = [
    { title: 'Control de Sedimentos Cuenca del Tolomosa', description: 'Conservación de suelos, prácticas agrosilvopastoriles, fruticultura - Prov. Cercado 1997/99 $us 111.828 (OEA)' },
    { title: 'Conservación de especies leñosas', description: 'Plantaciones forestales, cercamientos, viveros - Prov. Cercado 1993/1996 - $us. 93.576 FONAMA (Fondo Nacional de Medio Ambiente)' },
    { title: 'Agroforestería Tarupayo', description: 'Viveros, manejo pasturas, apicultura, fruticultura - Prov. O Connor- 1999-2000- $us 45.366 PASA Comunidad Europea.' },
    { title: 'Agroforestería San Diego', description: 'Viveros, fruticultura, agricultura conservacionista - Prov. O Connor 1999/2000 $us. 43.973 PASA- Comunidad Europea.' },
    { title: 'Proyecto Piloto de Unidades Productivas', description: 'Carpas Solares y fondo rotatorio- Prov. Cercado- 1995/98 - $us 28.979 Embajada Británica.' },
    { title: 'Campaña por la Calidad de Vida', description: 'Educación Ambiental no formal, Recursos Hídricos, Residuos Sólidos - Prov. Cercado, Arce, Gran Chaco 1995/98 $us. 40.000- HIVOS.' },
    { title: 'Diagnóstico Ambiental Municipal', description: 'Municipios de - 1997-2000 $us Yacuiba, Villa montes, San Lorenzo y Entre Ríos $us. 36.500 Fundación Konrad Adenauer.' },
    { title: 'Ajuste de Plan de Desarrollo Municipal', description: 'Municipios de Padcaya y Entre Ríos - 1997-1998 $us. 20.000 Programa de Desarrollo de Comunidades Rurales (PDCRII)' },
    { title: 'Año Internacional de las Montañas', description: 'Punto Focal AIM 2002 Tarija $us. 15.000 UICN_COSUDE.' },
    { title: 'Campaña por la Calidad de Vida', description: 'Departamento Tarija $us 30.000 COSUDE.' },
    { title: 'Implementación de barreras vivas para el control de la erosión y protección de las fuentes de agua en la Cordillera de Sama', description: 'Prov. Cercado-Méndez $us 70.000 COMUNIDAD EUROPEA.' },
    { title: 'Conservación de especies medicinales nativas recuperando practicas medicinales tradicionales en el piedemonte de la Cordillera de Sama', description: 'San Pedro Sola, San Andrés 2008-2010 $us 30.000 Prov. Cercado PUMA.' },
    { title: 'Campaña de Calidad de Vida', description: 'Departamento Tarija $us. 25.000 COSUDE' },
    { title: 'Programa de Revisión Técnica Vehicular, Movilidad Urbana, RED MONICA, y Educación Ambiental', description: 'Provincia -Cercado $us. 20.000 Swiss Contact y GAMT.' },
    { title: 'Proyecto de Reducción a la Vulnerabilidad en los medios de vida', description: 'CC Prov. Avilés Zona Media Luna $us. 200.000 AISDI, VIVE.' },
    { title: 'Proyecto “Fortalecimiento a las familias agrícolas con el componente Cambio Climático”', description: 'Provincia Méndez, Municipio de San Lorenzo en la Comunidad de Lajas, Corana y Carachimayo. $us. 40.000.- Fundación Johanniter - VIVE.' },
    { title: 'RELACIONAMIENTO INTERINSTUCIONAL', description: 'Con el Estado, Ministerio de Desarrollo Sostenible y Planificación FONAMA- Gobernación de Tarija- PERTT- Proyecto. Multipropósito San Jacinto, Asociación de Municipios.' },
    { title: 'CONVENIOS', description: 'Universidades Juan Misael Saracho, Universidad Privada Domingo Savio y Universidad Juan Pablo Católica, Proyecto Multipropósito San Jacinto, Fundación Educación para el Desarrollo (FAUTAPO), Fundación (PROIMPA), Programa Cuencas Pedagógicas Ministerio de Medio Ambiente (MMAyA), Gobierno Autónomo Municipal de Tarija, Servicio Gestión Integral del Agua (SEDEGIA), Fundación Esperanza Bolivia, Alianza con Unidad de Especias y Condimentos (UNEC).' },
    { title: 'REDES', description: 'Liga de Defensa del Medio Ambiente.' },
  ];
  /* ------------- */

  /* objetivos */

  objetivos = [
    {
      titulo: 'Implementación de Iniciativas Climáticas Locales',
      descripcion: 'Desarrollar e implementar proyectos específicos para la adaptación y mitigación del cambio climático a nivel local, centrados en comunidades vulnerables.'
    },
    {
      titulo: 'Promoción de la Equidad de Género y Generacional',
      descripcion: 'Integrar enfoques de equidad de género y generacional en todas las acciones y programas de la organización, asegurando la inclusión y participación igualitaria.'
    },
    {
      titulo: 'Investigación y Adopción de Tecnologías Limpias',
      descripcion: 'Realizar investigaciones sobre tecnologías limpias y promover su adopción en comunidades, fomentando soluciones innovadoras para reducir la huella ambiental.'
    },
    {
      titulo: 'Fortalecimiento de la Gobernanza del Agua',
      descripcion: 'Colaborar con comunidades y autoridades locales para fortalecer la gobernanza del agua, asegurando un uso equitativo y sostenible de este recurso vital.'
    },
    {
      titulo: 'Desarrollo de Programas de Agricultura Sostenible',
      descripcion: 'Diseñar y ejecutar programas que promuevan prácticas agrícolas sostenibles, contribuyendo a la resiliencia de las comunidades rurales y la conservación de la biodiversidad.'
    },
    {
      titulo: 'Concientización y Educación Ambiental',
      descripcion: 'Realizar campañas educativas para sensibilizar a la sociedad sobre la importancia de abordar el cambio climático y adoptar prácticas sostenibles en la vida cotidiana.'
    },
    {
      titulo: 'Colaboración con Actores Locales',
      descripcion: 'Establecer alianzas estratégicas con actores locales, incluyendo gobiernos, comunidades y otras organizaciones, para maximizar el impacto positivo de las iniciativas y fomentar la colaboración en la gestión sostenible de los recursos naturales.'
    },
    {
      titulo: 'Monitoreo y Evaluación de Impacto',
      descripcion: 'Implementar sistemas de monitoreo y evaluación para medir el impacto de las actividades, garantizando la eficacia y adaptabilidad de las intervenciones a lo largo del tiempo.'
    },
    {
      titulo: 'Contribuciones Nacionalmente Determinada y Objetivos de Desarrollo Sostenible',
      descripcion: 'En el contexto de acciones de Bolivia, el vivir bien con la visión de desarrollo integral, alinear a la contribución prevista determinada nacionalmente (NDC) y a los Objetivos de Desarrollo Sostenible (ODS).'
    }
  ];
  /* objetivos */





  currentYear: number = new Date().getFullYear();
  expandedSections: ExpandedSections = {
    quienesSomos: false,
    // Inicializa las demás propiedades si las tienes
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggle(section: keyof ExpandedSections) {
    this.expandedSections[section] = !this.expandedSections[section];
  }



  /* body-mision vision */
  
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const section = document.querySelector('.section');

    if (section) {
      const sectionOffset = section.getBoundingClientRect().top + window.scrollY;
      const isVisible = sectionOffset < offset + windowHeight;

      if (isVisible && !this.isVisible) {
        this.isVisible = true;
      }
    }
  }


  /* autoplay */
  config = {
    autoplay: {
      delay: 5000, // Intervalo de tiempo entre slides en milisegundos (5 segundos en este ejemplo)
      disableOnInteraction: false // Evita que el autoplay se detenga al interactuar con el Swiper
    },
    loop: true // Permite que el Swiper se desplace en un bucle
    // Agrega más configuraciones según sea necesario
  };
  /* autoplay */


}
