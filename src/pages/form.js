import React, { useState, useRef } from 'react';

import InputMask from 'react-input-mask';

import api from '../services/api';

import ipkonect_logo from '../assets/images/logo.png';

import '../styles/form.css';

function FORM({ history }) {

    const [email, set_email] = useState('');
    const [name, set_name] = useState('');
    const [number, set_number] = useState('');
    const [error, set_error] = useState('');

    const email_ref = useRef(null);
    const name_ref = useRef(null);
    const number_ref = useRef(null);

    async function handle_register(e) {
        e.preventDefault();

        set_error('');

        email_ref.current.style.border = 'none';
        name_ref.current.style.border = 'none';
        number_ref.current.style.border = 'none';

        if(email_ref.current.value === ''){
            email_ref.current.style.border = '1px solid #FF0000';
            set_error('Email é necessário.');
            return
        }

        if(name_ref.current.value === ''){
            name_ref.current.style.border = '1px solid #FF0000';
            set_error('Nome é necessário.');
            return
        }


        if(number_ref.current.value === ''){
            number_ref.current.style.border = '1px solid #FF0000';
            set_error('Número é necessário.');
            return
        }

        const register = await api.post('register', {
            email,
            name,
            number
        });

        if(register.data === 'Email já registrado.'){
            email_ref.current.style.border = '1px solid #FF0000';
            set_error('Email já registrado.');
            return
        }

        history.push('/end_register');
    }

    return (
        <div className="form_container">
            <div className="form_and_infos">
                <div className="infos">
                    <h1>
                        Cadastre-se e entre para o grupo vip de automação.
                    </h1>
                    <img src={ipkonect_logo} width="200px" />
                </div>
                <form>
                    <h1>Se cadastre</h1>
                    <input ref={email_ref} className="input_email" placeholder="Seu E-mail" onChange={e => set_email(e.target.value)} />
                    <input ref={name_ref} className="input_name" placeholder="Seu nome" onChange={e => set_name(e.target.value)} />
                    <InputMask ref={number_ref} mask="(99) 9999-9999" className="input_phone" placeholder="Seu número" onChange={e => set_number(e.target.value)} />;
                    <p className="error">{error}</p>
                    <p className="politic_and_terms_user">Ao se registrar, você aceita nossos <a href="https://ipkonect.com.br/user_terms.html" target="_blank">termos de uso</a> e a nossa <a href="https://ipkonect.com.br/privacity_politic.html" target="_blank">política de privacidade</a>.</p>
                    <button className="button_register" onClick={handle_register}>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default FORM;
