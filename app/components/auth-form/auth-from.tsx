'use client';
import { FC } from 'react';
import { Input } from '../ui/input/Input';
import styles from './auth-from.module.scss';
import { Button } from '../ui/button/button';
import { useForm } from 'react-hook-form';
import { IForm } from './auth-from.props';

export const AuthForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IForm>({
    mode: 'onBlur',
  });

  const onSubmit = (data: IForm) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formDescription}>
        <h1 className={styles.formDescriptionTitle}>Login to lorem ipsum</h1>
        <p className={styles.formDescriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div className={styles.formInner}>
        <div className={styles.inputBlock}>
          <div className={styles.inputBlockEmail}>
            <label className={styles.inputTitle}>Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              size="large"
              value=""
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 4,
                  message: 'Минимум 4 символа',
                },
                pattern: {
                  value: /^a-zA-Z+$/,
                  message: 'Используйте только латинские буквы',
                },
              })}
            ></Input>
            <div className={styles.errors}>
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>
          </div>

          <div className={styles.inputBlockPassword}>
            <label className={styles.inputTitle}>Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              size="large"
              value=""
              {...register('password', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 5,
                  message: 'Длина пароля минимум 5 символов',
                },
              })}
            ></Input>
            <div className={styles.errors}>
              {errors?.password && <p>{errors?.password?.message}</p>}
            </div>
          </div>
        </div>

        <Button type="login">Login</Button>
      </div>
    </form>
  );
};
