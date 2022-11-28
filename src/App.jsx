import './App.css'
import './components/Nomida'
import Nomida from './components/Nomida'

export default function App() {
  return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Formulario Nómida</h3>
            <hr></hr>
            <form>
              <div class="mb-3">
                <label for="ide" class="form-label">Ingresa número de identificación</label>
                <input type="number" class="form-control" id="ide" required="required" />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" required="required" />
              </div>
              <div class="mb-3">
                <label for="sm" class="form-label">Ingresa salario mensual</label>
                <input type="number" class="form-control" id="sm" required="required" />
              </div>
              <div class="mb-3">
                <label for="dt" class="form-label">Ingresa días trabajados</label>
                <input type="number" class="form-control" id="dt" required="required" />
              </div>
              <button type="button" class="btn btn-primary" onClick={Nomida}>Calcular</button>
            </form>
            <br></br>
            <div className='row'>
              <div id="nm" className='col-md-12'></div>
              <div id="sp" className='col-md-12'></div>
              <div id="at" className='col-md-12'></div>
              <div id="td" className='col-md-12'></div>
            </div>
            <br></br>
            <div id="total" className='totalp'></div>
          </div>
        </div>
      </div>
  )
}
