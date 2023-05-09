import React, { ChangeEvent, FocusEvent, useState } from 'react'
import s from "./Form.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'


interface FormValues {
    email: string,
    phone: string,
    message: string,
}


const Form = () => {
    const [formValue, setFormValue] = useState<FormValues>({ email: '', phone: '', message: '' });
    const [file, setFile] = useState<File>()
    const [activeInput, setActiveInput] = useState<string>('')
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const phoneActive = (e: FocusEvent<HTMLInputElement, Element>) => {
        setActiveInput('phone')
        
        if (formValue.phone === '') {
            setFormValue({ email: formValue.email, phone: '+7 (___) ___ __ __', message: formValue.message })
        }
        e.target.setSelectionRange(2, 2)
    }

    const phoneDeactive = () => {
        setActiveInput('')
        if (formValue.phone === '+7 (___) ___ __ __') {
            setFormValue({ email: formValue.email, phone: '', message: formValue.message })
        }
    }


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
                <form className={s.form__wrapper}>
                    <div className={s.form__input__wrapper}>
                        <input type='email' onFocus={() => setActiveInput('email')} onBlur={() => setActiveInput('')}
                            value={formValue.email}
                            onChange={(e) => setFormValue({ email: e.target.value, phone: formValue.phone, message: formValue.message })}
                        />
                        <label className={activeInput === 'email' || formValue.email !== '' ? s.placeholder__label__active : s.placeholder__label}>E-mail</label>
                    </div>
                    <div className={s.form__input__wrapper}>
                        <input type='tel' onFocus={(e) => phoneActive(e)} onBlur={() => phoneDeactive()}
                            value={formValue.phone}
                            onChange={(e) => setFormValue({ email: formValue.email, phone: e.target.value, message: formValue.message })}

                        />
                        <label className={activeInput === 'phone' || formValue.phone !== '' ? s.placeholder__label__active : s.placeholder__label}>Телефон</label>
                    </div>
                    <div className={s.form__textarea__wrapper}>
                        <textarea className={s.form__textarea} onFocus={() => setActiveInput('message')} onBlur={() => setActiveInput('')}
                            value={formValue.message}
                            onChange={(e) => setFormValue({ email: formValue.email, phone: formValue.phone, message: e.target.value })}
                        />
                        <label className={activeInput === 'message' || formValue.message !== '' ? s.placeholder__label__active : s.placeholder__label}>Сообщение</label>
                        <div className={s.form__file}>
                            <span>{file ? file.name : ""}</span>
                            <div className={s.upload__wrapper}>
                                <input id="upload" type="file" name="upload" onChange={handleFileChange} />
                                <label htmlFor="upload"> <GlobalSVGSelector typeSvg='paperclip' /> </label>

                            </div>
                        </div>
                    </div>
                    <div className={s.form__button__wrapper}>
                        <button>ОТПРАВИТЬ</button>
                        <span>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
