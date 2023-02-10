import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/texto-justificado.css";

export default function PoliticasDePrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mt-5 mb-5 text-justify">
      <Helmet>
        <title>Sideco | politicas de privacidad</title>
      </Helmet>
      <h3>
        MANUAL DE POLÍTICAS DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES
      </h3>
      <p>
        Todos los usuarios que suministren información en el portal manifiestan
        conocer y aceptar el Manual de Políticas de Privacidad y Tratamiento de
        Datos Personales de Soluciones Integrales de Colombia SIDECO S.A.S., el
        cual puede encontrar en la página web{" "}
        <a href="https://sideco.com.co/"> www.sideco.com.co</a>
      </p>
      <p className="fs-5">
        MANUAL DE POLÍTICAS DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES –
        SIDECO S.A.S.
      </p>
      <p>
        Para SIDECO S.A.S., la conservación, protección, integridad y
        confidencialidad de los datos personales de sus clientes es muy
        importante. Para esto hemos diseñado una política de almacenamiento y
        tratamiento de la información que nuestros clientes suministran a través
        de los diversos canales de comercialización de nuestros servicios tales
        como sitio web, call center, correo electrónico, aplicación móvil,
        mensajes de texto, redes sociales, entre otros; y estamos comprometidos
        con la protección y manejo adecuado de los mismos, conforme el régimen
        legal de protección de datos personales aplicable en cada territorio en
        donde operamos.
      </p>
      <p className="fs-5">CAPÍTULO I DISPOSICIONES GENERALES</p>

      <section>
        <p className="fs-5">ARTÍCULO 1. DEFINICIONES. </p>
        <p>
          Para efectos de la aplicación de las reglas contenidas en el presente
          manual y de acuerdo con lo establecido en el Artículo 3 de la Ley 1581
          de 2012 se entiende por:
        </p>
        <ol type="a">
          <li>
            <span className="fw-bold">Autorización:</span> Consentimiento
            previo, expreso e informado del Titular para llevar a cabo el
            Tratamiento de datos personales.
          </li>
          <li>
            <span className="fw-bold">Aviso de privacidad: </span>Comunicación
            verbal o escrita generada por la Responsable dirigida al Titular
            para el tratamiento de sus datos personales, mediante la cual se le
            informa acerca de la existencia de las políticas de Tratamiento de
            información que le serán aplicables, la forma de acceder a las
            mismas y las finalidades del Tratamiento que se pretende dar a los
            datos personales.
          </li>
          <li>
            <span className="fw-bold">Base de Datos: </span>Conjunto organizado
            de datos personales que sea objeto de Tratamiento.
          </li>
          <li>
            <span className="fw-bold">Dato personal: </span>Cualquier
            información vinculada o que pueda asociarse a una o varias personas
            naturales determinadas o determinables.
          </li>
          <li>
            <span className="fw-bold">Dato privado: </span>Es el dato que por su
            naturaleza íntima o reservada sólo es relevante para el titular.
          </li>
          <li>
            <span className="fw-bold">Datos sensibles: </span>Se entiende por
            datos sensibles aquellos que afectan la intimidad del Titular o cuyo
            uso indebido puede generar su discriminación, tales como aquellos
            que revelen el origen racial o étnico, la orientación política, las
            convicciones religiosas o filosóficas, la pertenencia a sindicatos,
            organizaciones sociales, de derechos humanos o que promueva
            intereses de cualquier partido político o que garanticen los
            derechos y garantías de partidos políticos de oposición, así como
            los datos relativos a la salud, a la vida sexual y los datos
            biométricos.
          </li>
          <li>
            <span className="fw-bold">Encargado del Tratamiento: </span>Persona
            natural o jurídica, pública o privada, que por sí misma o en asocio
            con otros, realice el Tratamiento de datos personales por cuenta del
            Responsable del Tratamiento.
          </li>
          <li>
            <span className="fw-bold">Responsable del Tratamiento: </span>
            Persona natural o jurídica, pública o privada, que por sí misma o en
            asocio con otros, decida sobre la base de datos y/o el Tratamiento
            de los datos.
          </li>
          <li>
            <span className="fw-bold">Titular: </span>Persona natural cuyos
            datos personales sean objeto de Tratamiento.
          </li>
          <li>
            <span className="fw-bold">Tratamiento: </span>Cualquier operación o
            conjunto de operaciones sobre datos personales, tales como la
            recolección, almacenamiento, uso, circulación o supresión de los
            mismos.
          </li>
        </ol>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 2. OBJETO. </p>
        <p>
          El presente documento tiene la finalidad de regular los procedimientos
          de recolección, manejo y tratamiento de los datos de carácter personal
          que realiza SIDECO S.A.S., a fin de garantizar y proteger el derecho
          fundamental de habeas data de sus, trabajadores, ex trabajadores,
          visitantes, clientes, usuarios y proveedores en el marco de lo
          establecido en la ley. Todo lo anterior en cumplimiento a lo previsto
          en el literal (k) del Artículo 17 de la Ley 1581 de 2012, que regula
          los deberes que asisten a los Responsables del tratamiento de datos
          personales, dentro de los cuales se encuentra el de adoptar un manual
          interno de políticas y procedimientos para garantizar el adecuado
          cumplimiento de la ley y en especial, para la atención de consultas y
          reclamos.
        </p>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 3. ÁMBITO DE APLICACIÓN. </p>
        <p>
          El presente manual será aplicable a los datos personales registrados y
          por registrar en las diferentes bases de datos manejadas por SIDECO
          S.A.S., esto es, a las bases de datos de nuestros Trabajadores,
          visitantes, clientes, usuarios y proveedores, que nos suministren sus
          datos para fines comerciales.
        </p>
        <p>
          La información que recolecta SIDECO S.A.S., puede incluir, en todo o
          en parte según las necesidades de cada producto y/o servicio, entre
          otros los siguientes datos:
        </p>
        <ul>
          <li>Nombres y apellidos.</li>
          <li>Tipo y número de identificación.</li>
          <li>Nacionalidad y país de residencia.</li>
          <li>Fecha de nacimiento.</li>
          <li>Estado civil.</li>
          <li>
            Teléfonos fijos y celulares de contacto (personal y/o laboral).
          </li>
          <li>
            Dirección de domicilio y electrónicas (personales y/o laborales).
          </li>
          <li>Referencias personales y laborales</li>
          <li>Profesión u oficio.</li>
          <li>
            Autorización de uso de logos en nuestra página web y brochure.
          </li>
        </ul>
        <p>
          Estos datos pueden ser almacenados y/o procesados en servidores
          ubicados en centros de cómputo, ya sean propios o contratados con
          terceros proveedores, lo cual es autorizado por nuestros huéspedes,
          visitantes, clientes, usuarios y proveedores al aceptar esta Política
          de Privacidad.
        </p>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 4. VERACIDAD DE LA INFORMACIÓN. </p>
        <p>
          Nuestros trabajadores, ex trabajadores, visitantes, clientes,
          aspirantes, usuarios y proveedores deberán suministrar información
          veraz sobre sus datos personales para efectos de hacer posible la
          prestación de los servicios por parte de SIDECO S.A.S., y bajo cuya
          condición aceptan entregar la información requerida.
        </p>
        <p>
          SIDECO S.A.S., presume la veracidad de la información suministrada y
          no verifica, ni asume la obligación de verificar la identidad de;
          trabajadores, ex trabajadores, visitantes, clientes, usuarios y
          proveedores, ni la veracidad, vigencia, suficiencia y autenticidad de
          los datos que cada uno de ellos proporcione. Por tanto, no asume
          responsabilidad por daños y/o perjuicios de toda naturaleza que
          pudieran tener origen en la falta de veracidad, vigencia, suficiencia
          o autenticidad de la información, incluyendo daños y perjuicios que
          puedan deberse a la homonimia o a la suplantación de la identidad.
        </p>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 5. LEGISLACIÓN APLICABLE. </p>
        <p>
          Este manual fue elaborado teniendo en cuenta las ordenanzas de la Ley
          1581 de 2012 “Por la cual se dictan disposiciones generales para la
          protección de datos personales” y del Decreto número 1377 de 2013 “Por
          el cual se reglamenta parcialmente la Ley 1581 de 2012”.
        </p>
      </section>

      <section>
        <p className="fs-5">
          ARTÍCULO 6. FINALIDADES DEL TRATAMIENTO DE LOS DATOS PERSONALES.{" "}
        </p>
        <p>
          La información recolectada es utilizada para procesar, confirmar,
          cumplir y proveer los servicios y/o productos adquiridos, directamente
          y/o con la participación de terceros proveedores de productos o
          servicios, así como para promocionar y publicitar nuestras
          actividades, productos y servicios, realizar transacciones, efectuar
          reportes a las distintas autoridades administrativas de control y
          vigilancia nacionales o internacionales, autoridades de policía o
          autoridades judiciales, entidades bancarias y/o compañías
          aseguradoras, para fines administrativos internos y/o comerciales
          tales como, investigación de mercados, auditorías, reportes contables,
          análisis estadísticos, facturación, y ofrecimiento y/o reconocimiento
          de beneficios propios de nuestros programas de lealtad. Así como
          también para notificar estado de un proceso de selección y a su vez
          informar si se requiere algo adicional para continuar en el proceso.
        </p>
        <p>
          Al aceptar esta Política de Privacidad y Tratamiento, nuestros
          trabajadores, ex trabajadores, visitantes, clientes, aspirantes,
          usuarios y proveedores en su calidad de titulares de los datos
          recolectados, autorizan que SIDECO S.A.S., realicen el tratamiento de
          los mismos, de forma parcial o total, incluyendo la recolección,
          almacenamiento, grabación, uso, circulación, procesamiento, supresión,
          para la ejecución de las actividades relacionadas con los servicios y
          productos adquiridos, tales como, realización de reservas,
          modificaciones, cancelaciones y cambios de la misma, reembolsos,
          atención de consultas, quejas y reclamos, pago de compensaciones e
          indemnizaciones, registros contables, correspondencia, procesamiento y
          verificación de tarjetas de crédito, débito y otros instrumentos de
          pago, identificación de fraudes y prevención de lavado de activos y de
          otras actividades delictivas y/o para el funcionamiento de los
          programas de lealtad y demás finalidades indicadas en este documento.
        </p>
        <p>
          Lo anterior, sin perjuicio de otras finalidades que hayan sido
          informadas en este documento y en los términos y condiciones de cada
          uno de los productos y servicios propios de cada una de nuestras
          unidades de negocio
        </p>
      </section>

      <p className="fs-5">CAPÍTULO II AUTORIZACIÓN </p>

      <section>
        <p className="fs-5">ARTÍCULO 7. AUTORIZACIÓN. </p>
        <p>
          La recolección almacenamiento, uso, circulación o supresión de datos
          personales por parte de SIDECO S.A.S., requiere del consentimiento
          libre, previo, expreso e informado del titular de los mismos. SIDECO
          S.A.S., en su condición de Responsable del tratamiento de datos
          personales, ha dispuesto de los mecanismos necesarios para obtener la
          autorización de los titulares garantizando en todo caso que sea
          posible verificar el otorgamiento de dicha autorización.
        </p>
        <p>
          Con la mencionada autorización, los trabajadores, ex trabajadores,
          visitantes, clientes, usuarios, aspirantes y proveedores aceptan las
          políticas y condiciones que se establecen en el presente documento.
        </p>
      </section>

      <section>
        <p className="fs-5">
          ARTÍCULO 8. FORMA Y MECANISMOS PARA OTORGAR LA AUTORIZACIÓN.{" "}
        </p>
        <p>
          La autorización del titular de la información constará en cada uno de
          los canales y mecanismos de recolección de datos de SIDECO S.A.S.
        </p>
        <p>
          Así, podrá constar en un documento físico, electrónico (mail,
          WhatsApp), o en cualquier otro formato que permita garantizar su
          posterior consulta. La autorización será emitida por el titular previo
          al tratamiento de sus datos personales, de conformidad con lo
          dispuesto en la Ley 1581 de 2102.
        </p>
        <p>
          Con el procedimiento de autorización consentida se garantiza que se ha
          puesto en conocimiento del titular de los datos personales, tanto el
          hecho que su información personal será recogida y utilizada para fines
          determinados y conocidos, como que tiene la opción de conocer
          cualquier alternación a los mismos y el uso específico que de ellos se
          ha dado. Lo anterior con el fin de que el titular tome decisiones
          informadas con relación a sus datos personales y controle el uso de su
          información personal.
        </p>
      </section>

      <p className="fs-5">CAPÍTULO III DERECHOS Y DEBERES </p>

      <section>
        <p className="fs-5">
          ARTÍCULO 9. DERECHOS DE LOS TITULARES DE LA INFORMACIÓN.{" "}
        </p>
        <p>
          De conformidad con lo establecido en el artículo 8 de la Ley 1581 de
          2012 el titular de los datos personales tiene los siguientes derechos:
        </p>
        <ol type="a">
          <li>
            Conocer, actualizar y rectificar sus datos personales frente a
            SIDECO S.A.S., en su condición de Responsable del tratamiento.
          </li>
          <li>
            Solicitar prueba de la autorización otorgada a SIDECO S.A.S., en su
            condición de Responsable del Tratamiento.
          </li>
          <li>
            Ser informado por SIDECO S.A.S., previa solicitud, respecto del uso
            que le ha dado a sus datos personales.
          </li>
          <li>
            Presentar ante la Superintendencia de Industria y Comercio quejas
            por infracciones a lo dispuesto en la Ley 1581 de 2012, una vez haya
            agotado el trámite de consulta o reclamo ante el Responsable del
            Tratamiento.
          </li>
          <li>
            Revocar la autorización y/o solicitar la supresión del dato cuando
            en el Tratamiento no se respeten los principios, derechos y
            garantías constitucionales y legales.
          </li>
          <li>
            Acceder en forma gratuita a sus datos personales que hayan sido
            objeto de Tratamiento.
          </li>
        </ol>
      </section>

      <section>
        <p className="fs-5">
          ARTÍCULO 10. DEBERES DE SIDECO S.A.S., EN RELACIÓN CON EL TRATAMIENTO
          DE LOS DATOS PERSONALES.{" "}
        </p>
        <p>
          SIDECO S.A.S., tendrá presente, en todo momento, que los datos
          personales son propiedad de las personas a las que se refieren y que
          sólo ellas pueden decidir sobre los mismos. En este sentido, hará uso
          de ellos sólo para aquellas finalidades para las que se encuentra
          facultado debidamente, y respetando en todo caso la Ley 1581 de 2012
          sobre protección de datos personales.
        </p>
        <p>
          De conformidad con lo establecido en el artículo 17 de la Ley 1581 de
          2012 SIDECO S.A.S., se compromete a cumplir en forma permanente con
          los siguientes deberes:
        </p>
        <ol type="a">
          <li>
            Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio
            del derecho de hábeas data.
          </li>
          <li>
            Conservar la información bajo las condiciones de seguridad
            necesarias para impedir su adulteración, pérdida, consulta, uso o
            acceso no autorizado o fraudulento.
          </li>
          <li>
            Realizar oportunamente, esto es en los términos previstos en los
            artículos 14 y 15 de la Ley 1581 de 2012, la actualización,
            rectificación o supresión de los datos.
          </li>
          <li>
            Tramitar las consultas y los reclamos formulados por los Titulares
            en los términos señalados en el artículo 14 de la Ley 1581 de 2012.
          </li>
          <li>
            Insertar en la base de datos la leyenda “información en discusión
            judicial” una vez notificado por parte de la autoridad competente
            sobre procesos judiciales relacionados con la calidad o detalles del
            dato personal.
          </li>
          <li>
            Abstenerse de circular información que esté siendo controvertida por
            el Titular y cuyo bloqueo haya sido ordenado por la Superintendencia
            de Industria y Comercio.
          </li>
          <li>
            Permitir el acceso a la información únicamente a las personas que
            pueden tener acceso a ella.
          </li>
          <li>
            Informar a la Superintendencia de Industria y Comercio cuando se
            presenten violaciones a los códigos de seguridad y existan riesgos
            en la administración de la información de los Titulares.
          </li>
          <li>
            Cumplir las instrucciones y requerimientos que imparta la
            Superintendencia de Industria y Comercio.
          </li>
        </ol>
      </section>

      <p className="fs-5">
        CAPÍTULO IV PROCEDIMIENTOS DE ACCESO, CONSULTA Y RECLAMACIÓN{" "}
      </p>

      <section>
        <p className="fs-5">ARTÍCULO 11. DERECHO DE ACCESO. </p>
        <p>
          El poder de disposición o decisión que tiene el titular sobre la
          información que le concierne, conlleva necesariamente el derecho de
          acceder y conocer si su información personal está siendo objeto de
          tratamiento, así como el alcance, condiciones y generalidades de dicho
          tratamiento.
        </p>
        <p>
          Asimismo, el titular tiene derecho a solicitar su rectificación en
          caso de ser inexactos o incompletos y a cancelarlos cuando no estén
          siendo utilizados conforme a finalidades y términos legales o
          contractuales o según las finalidades y términos contemplados en esta
          Política de Privacidad.
        </p>
        <p>
          SIDECO S.A.S., garantizará el derecho de acceso cuando, previa
          acreditación de la identidad del titular o de su representante o
          apoderado lo solicite según lo previsto en la Ley 1581 de 2012.
        </p>
        <p>
          Los clientes y usuarios pueden ejercer sus derechos de conocer,
          actualizar, rectificar y suprimir sus datos personales enviando su
          solicitud al correo electrónico: servicioalcliente@sideco.com.co y a
          través del teléfono 6610560, de conformidad con esta Política de
          Privacidad.
        </p>
        <p>Debe incluir en la solicitud los siguientes datos:</p>
        <ul>
          <li>Nombres y apellidos.</li>
          <li>Tipo de documento.</li>
          <li>Número de documento.</li>
          <li>Teléfono.</li>
          <li>Correo electrónico</li>
          <li>Asunto</li>
        </ul>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 12. RESPUESTA A CONSULTAS. </p>
        <p>
          En cualquier caso, independientemente del mecanismo implementado para
          la atención de solicitudes de consulta, las mismas serán atendidas en
          un término máximo de diez (10) días hábiles contados a partir de la
          fecha de su recibo. Cuando no fuere posible atender la consulta dentro
          de dicho término, se informará al interesado antes del vencimiento de
          los 10 días, expresando los motivos de la demora y señalando la fecha
          en que se atenderá su consulta, la cual en ningún caso podrá superar
          los cinco (5) días hábiles siguientes al vencimiento del primer plazo.
        </p>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 13. RECLAMOS. </p>
        <p>
          De conformidad con lo establecido en el artículo 14 de la Ley 1581 de
          2012, el Titular o sus causahabientes que consideren que la
          información contenida en una base de datos debe ser objeto de
          corrección, actualización o supresión, o cuando adviertan el presunto
          incumplimiento de cualquiera de los deberes contenidos en la Ley 1581
          de 2012, podrán presentar un reclamo ante el Responsable del
          Tratamiento, el cual será tramitado bajo las siguientes reglas:
        </p>

        <ol type="1">
          <li>
            El reclamo lo podrá presentar el Titular en los formatos que al
            efecto dispone SIDECO S.A.S., en su registro. Si el reclamo recibido
            no cuenta con información completa que permita darle trámite, esto
            es, con la identificación del Titular, la descripción de los hechos
            que dan lugar al reclamo, la dirección, y acompañando los documentos
            que se quiera hacer valer, se requerirá al interesado dentro de los
            cinco (5) días siguientes a su recepción para que subsane las
            fallas. Transcurridos dos (2) meses desde la fecha del requerimiento
            sin que el solicitante presente la información requerida, se
            entenderá que ha desistido del reclamo. Si por alguna circunstancia
            la Compañía recibe un reclamo que en realidad no debería ir dirigido
            contra él, dará traslado a quien corresponda en un término máximo de
            dos (2) días hábiles e informará de la situación al interesado.
          </li>
          <li>
            Una vez recibido el reclamo completo, se incluirá en la base de
            datos que mantiene SIDECO S.A.S., una leyenda que diga “reclamo en
            trámite” y el motivo del mismo, en un término no mayor a dos (2)
            días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo
            sea decidido.
          </li>
          <li>
            El término máximo para atender el reclamo será de quince (15) días
            hábiles contados a partir del día siguiente a la fecha de su recibo.
            Cuando no fuere posible atenderlo dentro de dicho término se
            informará al interesado antes del vencimiento del referido plazo los
            motivos de la demora y la fecha en que se atenderá su reclamo, la
            cual en ningún caso podrá superar los ocho (8) días hábiles
            siguientes al vencimiento del primer término.
          </li>
        </ol>
      </section>

      <section>
        <p className="fs-5">
          ARTÍCULO 14. IMPLEMENTACIÓN DE PROCEDIMIENTOS PARA GARANTIZAR EL
          DERECHO A PRESENTAR RECLAMOS.{" "}
        </p>
        <p>
          En cualquier momento y de manera gratuita el titular o su
          representante podrán solicitar a SIDECO S.A.S., la rectificación,
          actualización o supresión de sus datos personales, previa acreditación
          de su identidad. Los derechos de rectificación, actualización o
          supresión únicamente se podrán ejercer por:
        </p>
        <ul>
          <li>
            El titular o sus causahabientes, previa acreditación de su
            identidad, o a través de instrumentos electrónicos que le permitan
            identificarse.
          </li>
          <li>Su representante, previa acreditación de la representación.</li>
        </ul>
        <p>
          Cuando la solicitud sea formulada por persona distinta del titular y
          no se acredite que la misma actúa en representación de aquél, se
          tendrá por no presentada.
        </p>
        <p>
          La solicitud de rectificación, actualización o supresión debe ser
          presentada a través de los medios habilitados por SIDECO S.A.S.,
          señalados en el aviso de privacidad y contener, como mínimo, la
          siguiente información:
        </p>
        <ol type="1">
          <li>
            El nombre y domicilio del titular o cualquier otro medio para
            recibir la respuesta
          </li>
          <li>
            Los documentos que acrediten la identidad o la personalidad de su
            representante.
          </li>
          <li>
            La descripción clara y precisa de los datos personales respecto de
            los cuales el titular busca ejercer alguno de los derechos.
          </li>
          <li>
            En caso dado otros elementos o documentos que faciliten la
            localización de los datos personales.
          </li>
        </ol>
        <p>PARÁGRAFO 1. RECTIFICACIÓN Y ACTUALIZACIÓN DE DATOS. </p>
        <p>
          SIDECO S.A.S., tiene la obligación de rectificar y actualizar a
          solicitud del titular, la información de éste que resulte ser
          incompleta o inexacta, de conformidad con el procedimiento y los
          términos arriba señalados. Al respecto se tendrá en cuenta lo
          siguiente: En las solicitudes de rectificación y actualización de
          datos personales el titular debe indicar las correcciones a realizar y
          aportar la documentación que avale su petición.
        </p>
        <p>
          SIDECO S.A.S., tiene plena libertad de habilitar mecanismos que le
          faciliten el ejercicio de este derecho, siempre y cuando éstos
          beneficien al titular. En consecuencia, se podrán habilitar medios
          electrónicos u otros que considere pertinentes.
        </p>
        <p>
          SIDECO S.A.S., podrá establecer formularios, sistemas y otros métodos
          simplificados, mismos que deben ser informados en el aviso de
          privacidad y que se pondrán a disposición de los interesados en la
          página web.
        </p>
        SIDECO S.A.S., utilizará los servicios de atención o servicio al cliente
        que tiene en operación, siempre y cuando los plazos de respuesta no sean
        mayores a los señalados por el artículo 15 de la Ley 1581 de 2012.
        <p>
          Cada vez que SIDECO S.A.S., ponga a disposición una herramienta nueva
          para facilitar el ejercicio de sus derechos por parte de los titulares
          de información o modifique las existentes, lo informará a través de su
          página web.
        </p>
        <p>
          PARÁGRAFO 2. SUPRESIÓN DE DATOS. El titular tiene el derecho, en todo
          momento, a solicitar a SIDECO S.A.S., la supresión (eliminación) de
          sus datos personales cuando:
        </p>
        <p>
          a.) Considere que los mismos no están siendo tratados conforme a los
          principios, deberes y obligaciones previstas en la Ley 1581 de 2012.
          b.) Hayan dejado de ser necesarios o pertinentes para la finalidad
          para la cual fueron recabados. c.) Se haya superado el periodo
          necesario para el cumplimiento de los fines para los que fueron
          recabados
        </p>
        <p>
          Esta supresión implica la eliminación total o parcial de la
          información personal de acuerdo con lo solicitado por el titular en
          los registros, archivos, bases de datos o tratamientos realizados por
          SIDECO S.A.S., Es importante tener en cuenta que el derecho de
          cancelación no es absoluto y el Responsable puede negar el ejercicio
          del mismo cuando:
        </p>
        <ul>
          <li>
            La solicitud de supresión de la información no procederá cuando el
            titular tenga un deber legal o contractual de permanecer en la base
            de datos.
          </li>
          <li>
            La eliminación de datos obstaculice actuaciones judiciales o
            administrativas vinculadas a obligaciones fiscales, la investigación
            y persecución de delitos o la actualización de sanciones
            administrativas.
          </li>
          <li>
            Los datos sean necesarios para proteger los intereses jurídicamente
            tutelados del titular; para realizar una acción en función del
            interés público, o para cumplir con una obligación legalmente
            adquirida por el titular.
          </li>
        </ul>
        <p>
          En caso de resultar procedente la cancelación de los datos personales,
          SIDECO S.A.S., debe realizar operativamente la supresión de tal manera
          que la eliminación no permita la recuperación de la información.
        </p>
      </section>

      <section>
        <p className="fs-5">ARTÍCULO 15. REVOCATORIA DE LA AUTORIZACIÓN. </p>
        <p>
          Los titulares de los datos personales pueden revocar el consentimiento
          al tratamiento de sus datos personales en cualquier momento, siempre y
          cuando no lo impida una disposición legal. Para ello, deberán
          comunicarse con SIDECO S.A.S., mediante correo electrónico:
          servicioalcliente@sideco.com.co o a través del teléfono 6610560.
        </p>
        <p>
          Se deberá tener en cuenta que existen dos modalidades en las que la
          revocación del consentimiento puede darse. La primera, puede ser sobre
          la totalidad de las finalidades consentidas, esto es, que SIDECO
          S.A.S., deba dejar de tratar por completo los datos del titular; la
          segunda, puede ocurrir sobre tipos de tratamiento determinados, como
          por ejemplo para fines publicitarios o de estudios de mercado. Con la
          segunda modalidad, esto es, la revocación parcial del consentimiento,
          se mantienen a salvo otros fines del tratamiento que el Responsable,
          de conformidad con la autorización otorgada puede llevar a cabo y con
          los que el titular está de acuerdo.
        </p>
        <p>
          Por lo anterior, será necesario que el titular al momento elevar la
          solicitud de revocatorio consentimiento a SIDECO S.A.S., indique en
          ésta si la revocación que pretende realizar es total o parcial. En la
          segunda hipótesis se deberá indicar con cuál tratamiento el titular no
          está conforme. Habrá casos en que el consentimiento, por su carácter
          necesario en la relación entre titular y Responsable por el
          cumplimiento de un contrato, por disposición legal no podrá ser
          revocado. Los mecanismos o procedimientos que SIDECO S.A.S.,
          establezca para atender las solicitudes de revocatoria del
          consentimiento no podrán exceder los plazos previstos para atender las
          reclamaciones conforme se señala en el artículo 15 de la Ley 1581 de
          2012.
        </p>
      </section>

      <p className="fs-5">CAPÍTULO V SEGURIDAD DE LA INFORMACIÓN </p>

      <section>
        <p className="fs-5">ARTÍCULO 16. MEDIDAS DE SEGURIDAD. </p>
        <p>
          En desarrollo del principio de seguridad establecido en la Ley 1581 de
          2012, SIDECO S.A.S., ha adoptado las medidas técnicas, humanas y
          administrativas que sean necesarias para otorgar seguridad a los
          registros evitando su adulteración, pérdida, consulta, uso o acceso no
          autorizado o fraudulento.
        </p>
        <p>
          No obstante, lo anterior el cliente, trabajadores, ex trabajadores,
          terceros, usuarios, y/o aspirantes asume los riesgos que se derivan de
          entregar esta información en un medio como internet, el cual está
          sometido a diversas variables – ataques de terceros, fallas técnicas o
          tecnológicas, entre otras. SIDECO S.A.S., hará su mejor esfuerzo
          tecnológico para garantizar la seguridad de la información personal de
          todos sus clientes y/o usuarios, empleando razonables y actuales
          métodos de seguridad para impedir el acceso no autorizado, para
          mantener la exactitud de los datos y garantizar la correcta
          utilización de la información.
        </p>
      </section>

      <section>
        <p className="fs-5">
          ARTÍCULO 17. IMPLEMENTACIÓN DE LAS MEDIDAS DE SEGURIDAD. SIDECO S.A.S.{" "}
        </p>
        <p>
          Mantendrá protocolos de seguridad de obligatorio cumplimiento para el
          personal con acceso a los datos de carácter personal y a los sistemas
          de información. El procedimiento deberá considerar, como mínimo, los
          siguientes aspectos:
        </p>
        <ol type="a">
          <li>
            Los terceros contratados por SIDECO S.A.S., estarán obligados a
            adherirse y dar cumplimiento a las políticas y manuales de seguridad
            de la información, así como a los protocolos de seguridad que
            aplicamos a todos nuestros procesos.
          </li>
          <li>
            Todo contrato de SIDECO S.A.S., con terceros (contratistas,
            consultores externos, colaboradores temporales, etc.) que involucre
            el tratamiento de información y datos personales, incluirá un
            acuerdo de confidencialidad que detalla sus compromisos para la
            protección, cuidado, seguridad y preservación de la
            confidencialidad, integridad y privacidad de la misma.
          </li>
          <li>
            Ámbito de aplicación del procedimiento con especificación detallada
            de los recursos protegidos.
          </li>
          <li>
            Medidas, normas, procedimientos, reglas y estándares encaminados a
            garantizar el nivel de seguridad exigido en la Ley 1581 de 2012.
          </li>
          <li>Funciones y obligaciones del personal.</li>
          <li>
            Estructura de las bases de datos de carácter personal y descripción
            de los sistemas de información que los tratan.
          </li>
          <li>
            Procedimiento de notificación, gestión y respuesta ante las
            incidencias.
          </li>
          <li>
            Procedimientos de realización de copias de respaldo y de
            recuperación de los datos.
          </li>
          <li>
            Controles periódicos que se deban realizar para verificar el
            cumplimiento de lo dispuesto en el procedimiento de seguridad que se
            implemente
          </li>
          <li>
            Medidas a adoptar cuando un soporte o documento vaya a ser
            transportado, desechado o reutilizado.
          </li>
          <li>
            El procedimiento deberá mantenerse actualizado en todo momento y
            deberá ser revisado siempre que se produzcan cambios relevantes en
            el sistema de información o en la organización del mismo.
          </li>
          <li>
            El contenido del procedimiento deberá adecuarse en todo momento a
            las disposiciones vigentes en materia de seguridad de los datos
            personales
          </li>
        </ol>
      </section>

      <p className="fs-5">CAPÍTULO VI DISPOSICIONES FINALES </p>

      <section>
        <p className="fs-5">
          ARTÍCULO 18. MODIFICACIONES A LA POLÍTICA DE PRIVACIDAD.{" "}
        </p>
        <p>
          SIDECO S.A.S., se reserva el derecho de efectuar en cualquier momento
          modificaciones o actualizaciones a esta Política de Privacidad, para
          la atención de novedades legislativas, políticas internas o nuevos
          requerimientos para la prestación u ofrecimiento de sus servicios o
          productos.
        </p>
      </section>

      <section>
        <p className="fs-5">
          ARTÍCULO 19. VIGENCIA DEL TRATAMIENTO DE LA INFORMACIÓN Y DATOS
          PERSONALES.{" "}
        </p>
        <p>
          La información suministrada por los clientes y usuarios permanecerá
          almacenada hasta por el término de quince (15) años contados a partir
          de la fecha del último tratamiento, para permitirnos el cumplimiento
          de las obligaciones legales y/o contractuales a su cargo especialmente
          en materia contable, fiscal y tributaria.
        </p>
      </section>
    </div>
  );
}
