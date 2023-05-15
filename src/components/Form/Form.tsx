import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react'
import s from "./Form.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'
import { setFormData } from '../../axios/axios';
import { useStatus } from '../../hooks/useStateHooks';
import { useAppSelector } from '../../hooks/reduxHook';


interface FormValues {
    email: string,
    phone: string,
    message: string,
}


const Form = () => {
    const [formValue, setFormValue] = useState<FormValues>({ email: '', phone: '', message: '' });
    const [file, setFile] = useState<FileList | null>(null)
    const [tel, setTel] = useState('')
    const [unRegTel, setUnRegTel] = useState('')
    const [fileArray, setFileArray] = useState<File[]>([])

    const [activeInput, setActiveInput] = useState<string>('')
    const [statusMessage, setStatusMessage] = useState<string>('')
    // const [status, setStatus] = useState<boolean | null>(useStatus())
    const status = useAppSelector(state => state.projects.status)
    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setFile(e.target.files[0])
    //     }
    // }


    
        
    

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files);
    };

    const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormValue({ email: formValue.email, phone: e.target.value, message: formValue.message })
    }



    const phoneActive = (e: FocusEvent<HTMLInputElement, Element>) => {
        setActiveInput('phone')
        e.target.placeholder = "+7(___)___-__-__"

        //  if (formValue.phone === '') {
        //      setFormValue({ email: formValue.email, phone: tel.join(''), message: formValue.message })
        //  }

    }


    const phoneDeactive = (e: FocusEvent<HTMLInputElement, Element>) => {
        setActiveInput('')
        e.target.placeholder = ""

        //  if (formValue.phone === '+7') {
        //      setFormValue({ email: formValue.email, phone: '', message: formValue.message })
        //  }
    }

    function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setFormData(formValue.email, formValue.phone, formValue.message, file)

        if (status === true) {
            setStatusMessage('Ваша заявка успешно отправлена')
        } else if (status === false) {
            setStatusMessage('Не удалось отправить заявку, повторите отправку позднее')
        } else {
            setStatusMessage('')
        }
        setFormValue({ email: '', phone: '', message: '' })
        setFile(null)


    }

    useEffect(() => {
        file ? setFileArray(Array.from(file)) : setFileArray([]);
    }, [file])



    return (
        <div className={s.form__block}>
            <div className={s.form__block__wrapper}>
                <div className={s.form__block__info}>
                    <GlobalSVGSelector typeSvg={'form-logo'} />
                    <h1 className={s.text__title}>Расскажите <br /> о вашем проекте</h1>
                    <span className={s.text__description}>Поделитесь с нами информацией,
                        чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды.
                        Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</span>
                </div>
                <form method='POST' className={s.form__wrapper} onSubmit={formSubmit}>
                    <div className={s.form__input__wrapper}>
                        <input type='email' onFocus={() => setActiveInput('email')} onBlur={() => setActiveInput('')}
                            value={formValue.email}
                            onChange={(e) => setFormValue({ email: e.target.value, phone: formValue.phone, message: formValue.message })}
                            required
                        />
                        <label className={activeInput === 'email' || formValue.email !== '' ? s.placeholder__label__active : s.placeholder__label}>E-mail</label>
                    </div>
                    <div className={s.form__input__wrapper}>
                        <input id='online_phone' type='tel' onFocus={(e) => phoneActive(e)} onBlur={(e) => phoneDeactive(e)}
                            value={formValue.phone}
                            onChange={(e) => phoneChange(e)}
                            // pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"

                            required
                        />
                        <label className={activeInput === 'phone' || formValue.phone !== '' ? s.placeholder__label__active : s.placeholder__label}>Телефон</label>
                    </div>
                    <div className={s.form__textarea__wrapper}>
                        <textarea className={s.form__textarea} onFocus={() => setActiveInput('message')} onBlur={() => setActiveInput('')}
                            value={formValue.message}
                            onChange={(e) => {
                                setFormValue({ email: formValue.email, phone: formValue.phone, message: e.target.value })
                            }}
                            required
                        />
                        <label className={activeInput === 'message' || formValue.message !== '' ? s.placeholder__label__active : s.placeholder__label}>Сообщение</label>
                        <div className={s.form__file}>
                            {fileArray.map((file: File) => <span>{file ? file.name : ""}</span>)}
                            <div className={s.upload__wrapper}>
                                <input id="upload" type="file" name="upload" onChange={handleFileChange} multiple />
                                <label htmlFor="upload"> <GlobalSVGSelector typeSvg='paperclip' /> </label>

                            </div>
                        </div>
                    </div>
                    <div className={s.form__button__wrapper}>
                        <button type='submit' >ОТПРАВИТЬ</button>
                        <span>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</span>
                    </div>
                    <div className={s.form__status__opened}>
                        <span>
                            {statusMessage}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
