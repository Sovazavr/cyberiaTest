import React, { ChangeEvent, useState } from 'react'
import s from "./Form.module.scss"
import { GlobalSVGSelector } from '../GlobalSVGSelector/GlobalSVGSelector'

interface FormValues {
    email: string,
    phone: string,

}

const Form = () => {
    const [formValue, setFormValue] = useState<FormValues>({ email: '', phone: '' });
    const [file, setFile] = useState<File>()

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
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
                        <input type='email' />
                        <label className={s.placeholder__label}>E-mail</label>
                    </div>
                    <div className={s.form__input__wrapper}>
                        <input type='phone' />
                        <label className={s.placeholder__label}>Телефон</label>
                    </div>
                    <div className={s.form__textarea__wrapper}>
                        <textarea className={s.form__textarea} />
                        <label className={s.placeholder__label}>Сообщение</label>
                        <div className={s.form__file}>
                            <span>{file ? file.name : ""}</span>
                            <input id="upload" type="file" name="upload" onChange={handleFileChange} />
                            <GlobalSVGSelector typeSvg='paperclip'/>
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
