import { useState, useEffect } from 'react';
import Modal from '../components/Modal';

export type DataWithId<Data>={
    id: number
    data?: Data,
}
export default function useCVDataBlok<T>(
    EditFormData: (
        { defaultValue, geterResult }: { defaultValue: DataWithId<T>, geterResult: (Data: T) => void }
    ) => JSX.Element,
): {
    pushData: (obj: T) => void,
    createData: () => void,
    remuveData: (id: number) => void,
    editData: (id: number) => void,
    modalJSX: JSX.Element,
    Data: DataWithId<T>[],
    ModalData: JSX.Element
} {
    const [Data, setData]=useState<DataWithId<T>[]>([])
    const [counterId, setCounterId]=useState<number>(0)

    const [modalJSX, setModalJSX]=useState<JSX.Element>(<></>)
    const [isVisibleModal, setIsVisibleModal]=useState<boolean>(false)

    const pushData=(obj: T) => {
        setData((prevData) => ([...prevData, { data: obj, id: counterId }]))
        setCounterId((prevCounterId) => (prevCounterId+1))
        setIsVisibleModal(false)
    }

    const createData=() => {
        setModalJSX(
            <EditFormData
                defaultValue={{ id: counterId }}
                geterResult={pushData}
            />
        )
        setIsVisibleModal(true)
    };

    const remuveData=(id: number) => {
        setData((prevData) => (prevData.filter((item) => item.id!==id)))
    }

    const editData=(id: number) => {
        setModalJSX(<EditFormData
            defaultValue={Data.find((item) => item.id===id)||{ id: 9999 }}
            geterResult={(newObj: T) => {
                setData((prevData) => (
                    prevData.map((item) => {
                        if (item.id===id) {
                            item.data=newObj
                        }
                        return item
                    })
                ));
                setIsVisibleModal(false)
            }}
        />)
        setIsVisibleModal(true)
    }

    const ModalData=<Modal
        isVisible={isVisibleModal}
        onClose={() => { setIsVisibleModal(false) }}
    >
        {modalJSX}
    </Modal>

    return {
        pushData, createData, remuveData, editData, modalJSX, Data, ModalData
    }
}