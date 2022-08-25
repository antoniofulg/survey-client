import React from 'react'

type Props = {
  children: React.ReactNode
  disabled: boolean
}

const SubmitButton: React.FC<Props> = ({
  children,
  disabled = false,
}: Props) => {
  return (
    <button data-testid="submit" disabled={disabled} type="submit">
      {children}
    </button>
  )
}

export default SubmitButton
