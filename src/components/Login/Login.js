import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { changeToken } from '../../store/actions';
import './Login.css';

class Login extends React.Component {
    state = {
        formData: {
            email: '',
            password: '',
            staylogged: false
        }
    }

    handleStayLogged = (event) => {
      const { formData } = this.state;
      formData.staylogged = !formData.staylogged;
      this.setState({ formData });
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
      const { changeToken } = this.props;

      let formData = {
        email: this.state.formData.email,
        password: this.state.formData.password,
        staylogged: this.state.formData.staylogged
      }

      console.log(formData);

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => {
        changeToken({jwt: '86fasfgfsogHGad'});
        return;
      })
      .catch(err => {
        console.log(err);
      })
    }

    render() {
        const { formData, submitted } = this.state;
        return (
          <div className="container">
            <div className="form-wr">
              <ValidatorForm
                  className="form"
                  ref="form"
                  onSubmit={this.handleSubmit}
              >
                <div className="form__icon"></div>
                <div className="form__title">Вход в аккаунт</div>
                  <TextValidator
                      className="form__field"
                      label="Почта*"
                      onChange={this.handleChange}
                      name="email"
                      value={formData.email}
                      variant="outlined"
                      validators={['required', 'isEmail']}
                      errorMessages={['Обязательное поле!', 'Введите корректный Email']}
                  />
                  <br />
                  <TextValidator
                      className="form__field"
                      label="Пароль*"
                      onChange={this.handleChange}
                      name="password"
                      value={formData.password}
                      variant="outlined"
                      validators={['required']}
                      errorMessages='Обязательное поле!'
                  />
                  <div><FormControlLabel
                    control={
                    <Checkbox
                        name="staylogged"
                        color="primary"
                        onChange={this.handleStayLogged}
                    />
                    }
                    label="Забыли пароль?"
                  /></div>
                  <br />
                  <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      disabled={submitted}
                  >Войти в аккаунт
                  </Button>
              </ValidatorForm>
              <div className="form-links">
                <div className="form-links-col-1"><a href="">Забыли пароль?</a></div>
                <div className="form-links-col-2"><a href="">Ещё нет аккаунта? Регистрация</a></div>
              </div>
              <div className="copyright">Copyright© Ваш сайт 2019.</div>
            </div>
          </div>
        );
    }
}

const putStateToProps = (state) => {
  return {
    token: state.token
  }
}

const putActionsToProps = (dispatch) => {
  return {      
    changeToken: bindActionCreators(changeToken, dispatch)
  }
}  

export default connect(putStateToProps, putActionsToProps)(Login);