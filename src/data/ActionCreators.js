import { ActionTypes } from "./Types";
// import { data as phData } from "./placeholderData";
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType, params).then(response => ({
    dataType,
    data: response.data,
    total: parseInt(response.headers["x-total-count"]),
    params
  }))
});

export const setPageSize = newSize => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize
});
export const setSortProperty = newProp => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp
});
