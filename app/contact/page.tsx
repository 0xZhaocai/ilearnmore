'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { useLocale } from '@/lib/i18n'
import { DynamicTitle } from '@/components/dynamic-title'

// Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgddnkd'

export default function ContactPage() {
  const { t, locale } = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([])
  const [selectedRole, setSelectedRole] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const formData = new FormData(e.currentTarget)

    // Add pain points as a combined field
    formData.set('painPoints', selectedPainPoints.join(', '))
    formData.set('role', selectedRole || t.contact.form.roles[0])
    formData.set('_subject', `[LEMO 业务诊断] 新表单提交 - ${formData.get('name')}`)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        setSubmitError(data.error || (locale === 'zh' ? '提交失败，请稍后重试' : 'Submission failed, please try again'))
      }
    } catch {
      setSubmitError(locale === 'zh' ? '网络错误，请稍后重试' : 'Network error, please try again')
    } finally {
      setIsSubmitting(false)
    }
  }

  const togglePainPoint = (point: string) => {
    setSelectedPainPoints(prev =>
      prev.includes(point)
        ? prev.filter(p => p !== point)
        : [...prev, point]
    )
  }

  const successMessage = {
    zh: { title: '提交成功！', desc: '我们会在 24 小时内与您联系，请保持手机通畅。', btn: '再次提交' },
    en: { title: 'Submitted!', desc: 'We will contact you within 24 hours.', btn: 'Submit Again' }
  }

  const benefitsTitle = locale === 'zh' ? '您将获得：' : 'What You\'ll Get:'

  return (
    <div className="pt-24">
      <DynamicTitle pageKey="contact" />
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits + Form Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-8">{benefitsTitle}</h2>
              <div className="space-y-6">
                {t.contact.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-lg border border-border p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{successMessage[locale].title}</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    {successMessage[locale].desc}
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    {successMessage[locale].btn}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={locale === 'zh' ? '请输入您的称呼' : 'Your name'}
                      required
                    />
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <Label htmlFor="contact">{t.contact.form.contact}</Label>
                    <Input
                      id="contact"
                      name="contact"
                      placeholder={locale === 'zh' ? '手机号或微信号' : 'Phone or WeChat'}
                      required
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-3">
                    <Label>{t.contact.form.role}</Label>
                    <RadioGroup
                      defaultValue={t.contact.form.roles[0]}
                      className="grid grid-cols-2 gap-2"
                      onValueChange={setSelectedRole}
                    >
                      {t.contact.form.roles.map((role) => (
                        <div key={role} className="flex items-center space-x-2">
                          <RadioGroupItem value={role} id={role} />
                          <Label htmlFor={role} className="font-normal cursor-pointer">{role}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Pain Points */}
                  <div className="space-y-3">
                    <Label>{t.contact.form.painPoints}</Label>
                    <div className="space-y-2">
                      {t.contact.form.painPointOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={selectedPainPoints.includes(option)}
                            onCheckedChange={() => togglePainPoint(option)}
                          />
                          <Label htmlFor={option} className="font-normal cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {submitError && (
                    <p className="text-sm text-destructive">{submitError}</p>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting
                      ? (locale === 'zh' ? '提交中...' : 'Submitting...')
                      : t.contact.form.submit}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}