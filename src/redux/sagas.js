import { takeEvery, put, call } from "redux-saga/effects";
import ProductService from "../Services/productService";
import { setCategories, setProducts, showCategoriesLoading, showLoader } from "./action";
import { FETCH_CATEGORIES, FETCH_PRODUCTS } from "./types";

function* productsWorker ({payload, query}) {
    try {
        yield put(showLoader(true))
        const response = yield call(() => ProductService.getAllProduct(payload))
        yield put(setProducts(response.data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))))
    }
    catch (e) {

    }
    finally {
        yield put(showLoader(false))
    }
}

function* categoriesWorker () {
    try {
        yield put(showCategoriesLoading(true))
        const response = yield call(ProductService.getCategories)
        yield put(setCategories(response.data))
    }
    catch (e) {

    }
    finally {
        yield put(showCategoriesLoading(false))
    }
}



export function* sagaWatcher () {
    yield takeEvery(FETCH_PRODUCTS, productsWorker)
    yield takeEvery(FETCH_CATEGORIES, categoriesWorker)
}