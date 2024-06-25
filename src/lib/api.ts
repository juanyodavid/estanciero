import { error } from '@sveltejs/kit';

const base: string = 'https://api.realworld.io/api';

interface SendOptions {
  method: string;
  headers?: { [key: string]: string };
  body?: string;
  path: any;
}

async function send(options: SendOptions & { data?: any; token?: string }): Promise<any> {
  const opts: SendOptions = { ...options };

  if (options.data) {
    opts.headers = { 'Content-Type': 'application/json' };
    opts.body = JSON.stringify(options.data);
  }

  if (options.token) {
    opts.headers = { ...opts.headers, Authorization: `Token ${options.token}` };
  }

  const res = await fetch(`${base}/${options.path}`, opts);
  if (res.ok || res.status === 422) {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  }

  error(res.status);
}

export function get(path: string, token?: string): Promise<any> {
  return send({ method: 'GET', path, token });
}

export function del(path: string, token?: string): Promise<any> {
  return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: any, token?: string): Promise<any> {
  return send({ method: 'POST', path, data, token });
}

export function put(path: string, data: any, token?: string): Promise<any> {
  return send({ method: 'PUT', path, data, token });
}
