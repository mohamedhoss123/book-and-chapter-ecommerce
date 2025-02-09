import { router, useForm } from '@inertiajs/react'
import React from 'react'

export default function Login() {

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  function onSubmit(e) {
    e.preventDefault();
    router.post(route('admin.login_submit'), {
      onFinish: () => reset('password'),
    });
  }
  return (
    <div><form action={onSubmit}>
      <input type="text" name='email' />
      <input type="text" name='password' />

    </form></div>
  )
}
