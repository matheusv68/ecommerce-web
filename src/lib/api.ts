const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '')

if (!apiBaseUrl) {
  throw new Error(
    'A variável VITE_API_BASE_URL não foi definida. Crie um arquivo .env a partir de .env.example.',
  )
}

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: BodyInit
  json?: Record<string, unknown>
}

export async function api<T>(
  path: string,
  { body, json, headers, ...options }: RequestOptions = {},
): Promise<T> {
  const response = await fetch(`${apiBaseUrl}/${path.replace(/^\//, '')}`, {
    ...options,
    body: json ? JSON.stringify(json) : body,
    headers: {
      Accept: 'application/json',
      ...(json ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
  })

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    const message = data?.message ?? `Erro na requisição (${response.status})`

    throw new ApiError(message, response.status)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
