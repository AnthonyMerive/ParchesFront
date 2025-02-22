import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'
import registroReducer from '../reducers/registroReducer'
import authReducer from './../reducers/authReducer'
import ParchesReducer from '../reducers/ParchesReducer'
import misParchesReducer from '../reducers/misParchesReducer'
import EditarParcheReducer from '../reducers/EditarParcheReducer'
import filtroMisParchesReducer from '../reducers/filtroMisParchesReducer'
import filtroListaParchesReducer from '../reducers/filtroListaParchesReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      registro: registroReducer,
      parcheCreado: crearParcheReducer,
      filtroMisParches: filtroMisParchesReducer,
      auth: authReducer,
      listaParches: ParchesReducer,
      filtroListaParches: filtroListaParchesReducer,
      misParches: misParchesReducer,
      ParcheEditado: EditarParcheReducer
    }
  )
}
export default rootReducer
