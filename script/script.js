document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generarBtn');
    const copiarBtn = document.getElementById('copiarBtn');
    const minutaOutput = document.getElementById('minutaOutput');
    
    generarBtn.addEventListener('click', generarMinuta);
    copiarBtn.addEventListener('click', copiarMinuta);
    
    function generarMinuta() {
        // Obtener valores del formulario
        // Obtener la fecha seleccionada
        const fechaInput = document.getElementById('fechaMinuta').value;
        const fecha = new Date(fechaInput);

        // Formatear la fecha a un formato (ej: "01 de mayo de 2025")
        const opcionesFecha = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
        };

        const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);

        
        const tituloValor = document.getElementById('tituloValor').value;
        document.getElementById('minutaTitulo').innerHTML = `
        Minuta Semanal - SI ${tituloValor}`;
        document.getElementById('minutaFecha').innerHTML = `
        Fecha: ${fechaFormateada}`;
        const numeroProyecto = document.getElementById('numeroProyecto').value;
        const nombreProyecto = document.getElementById('nombreProyecto').value;
        const descripcion = document.getElementById('descripcion').value;
        const arquitecto = document.getElementById('arquitecto').value;
        const solicitante = document.getElementById('solicitante').value;
        const observaciones = document.getElementById('observaciones').value;

        //Valores de los radio buttons
        const aplicaRapid7 = document.querySelector('input[name="rapid7"]:checked').value;
        const aplicaPrisma = document.querySelector('input[name="prisma"]:checked').value;
        
        // Actualizar la minuta con los valores del formulario
        document.getElementById('minutaTitulo').textContent = `Minuta Semanal - SI ${tituloValor}`;
        document.getElementById('minutaNumeroProyecto').textContent = numeroProyecto;
        document.getElementById('minutaNombreProyecto').textContent = nombreProyecto;
        document.getElementById('minutaDescripcion').textContent = descripcion;
        document.getElementById('minutaArquitecto').textContent = arquitecto;
        document.getElementById('minutaSolicitante').textContent = solicitante;
        document.getElementById('minutaAplicaRapid7').textContent = aplicaRapid7;
        document.getElementById('minutaAplicaPrisma').textContent = aplicaPrisma;

        // Colores para las respuestas de checklist
        // Rapid7
        const rapid7Element = document.getElementById('minutaAplicaRapid7');
        rapid7Element.textContent = aplicaRapid7;
        rapid7Element.className = 'infoPreguntas ' + (aplicaRapid7 === 'Sí aplica' ? 'respuesta-si' : 'respuesta-no');
        
        // Prisma
        const prismaElement = document.getElementById('minutaAplicaPrisma');
        prismaElement.textContent = aplicaPrisma;
        prismaElement.className = 'infoPreguntas ' + (aplicaPrisma === 'Sí aplica' ? 'respuesta-si' : 'respuesta-no');


        document.getElementById('minutaObservaciones').textContent = observaciones;
        
        // Mostrar la minuta generada
        minutaOutput.style.display = 'block';
    }
    
    function copiarMinuta() {
        // Seleccionar el contenido de la minuta
        const range = document.createRange();
        range.selectNode(minutaOutput);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        
        try {
            // Copiar el texto seleccionado
            const successful = document.execCommand('copy');
            const msg = successful ? '¡Minuta copiada al portapapeles!' : 'No se pudo copiar la minuta';
            
            // Mostrar mensaje en el elemento HTML
            mostrarAdvertencia(msg);
        } catch (err) {
            mostrarAdvertencia('Error al copiar: ' + err);
        }
        
        // Limpiar la selección
        window.getSelection().removeAllRanges();
    }
    
    // Función para mostrar/ocultar advertencias
    function mostrarAdvertencia(mensaje) {
        const advertenciaElement = document.getElementById('advertenciaCopy');
        advertenciaElement.textContent = mensaje;
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            advertenciaElement.textContent = '';
        }, 3000);
    }
});