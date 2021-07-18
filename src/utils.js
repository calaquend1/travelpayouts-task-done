import React, {useState} from 'react'

export const DateInput = ({placeholder}) => {
    const [className, setClassName] = useState('')
    const onChange = (e) => setClassName(e?.target?.value ? 'has-value' : '')
    return <input onChange={onChange} className={className} type='date' placeholder={placeholder} />
}

export const defaultPropsEN = {
    header: 'Where does it come from? Why do we use it?',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    buttonText: 'SEARCH',
    departPlaceholder: "Depart date",
    returnPlaceholder: "Return date"
}

export const defaultPropsRU = {
    header: 'Откуда это пришло? Почему мы это используем?',
    text: 'Давно установлено, что читатель будет отвлекаться на удобочитаемое содержимое страницы, глядя на ее макет.',
    buttonText: 'ПОИСК',
    departPlaceholder: "Дата вылета",
    returnPlaceholder: "Дата прилёта"
}

export const createProps = (props, locale) => {
    let defaultProps = {...defaultPropsEN};
    if (locale === 'RU') {
        defaultProps = {...defaultPropsRU}
    }
    return ({
      header: props.header || defaultProps.header,
      text: props.text || defaultProps.text,
      buttonText: props.buttonText || defaultProps.buttonText,
      departPlaceholder: props.departPlaceholder || defaultProps.departPlaceholder,
      returnPlaceholder: props.returnPlaceholder || defaultProps.returnPlaceholder,
    })
}