type ErrorMessagesProps = {
    errors: any[] | string
}

export const ErrorMessages = ({ errors }: ErrorMessagesProps): JSX.Element => {
    if (typeof errors === 'string') {
        return <div className="text-red-400 text-xs text-center rounded p-2 mb-3">Datos incorrectos. {errors}</div>
    }

    if (errors) {
        return (
            <div className="errors">
                {Object.entries(errors).map(([_, values]) => {
                    return (
                        <div key={_} className="text-red-400 text-xs text-center rounded p-2 mb-3">
                            Datos incorrectos. {values[0]}
                        </div>
                    )
                })}
            </div>
        )
    }

    return <div className="p-2 mb-3" />
}
