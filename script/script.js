document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generarBtn');
    const copiarBtn = document.getElementById('copiarBtn');
    const minutaOutput = document.getElementById('minutaOutput');
    
    generarBtn.addEventListener('click', generarMinuta);
    copiarBtn.addEventListener('click', copiarMinuta);
    
    function generarMinuta() {
        // Obtener valores del formulario
        const tituloValor = document.getElementById('tituloValor').value;
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
            const msg = successful ? 'Minuta copiada al portapapeles!' : 'No se pudo copiar la minuta';
            alert(msg);
        } catch (err) {
            alert('Error al copiar: ' + err);
        }
        
        // Limpiar la selección
        window.getSelection().removeAllRanges();
    }
});