import styled from 'styled-components'
import { Field as FormikField, Formik as FormikBase, Form as FormikForm } from 'formik'

export const Formik = styled(FormikBase)``
export const ValidationField = styled(FormikField).attrs(({ className }) => ({ className }))``
export const ValidationForm = styled(FormikForm)``

export const Hint = styled.div.attrs(({ className }) => ({ className: `form-input-hint ${className}` }))``
