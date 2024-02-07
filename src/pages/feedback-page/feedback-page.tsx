import { useTranslation } from "react-i18next";

const FeedbackPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Welcome to React')}

      </div>
  )
}

export default FeedbackPage