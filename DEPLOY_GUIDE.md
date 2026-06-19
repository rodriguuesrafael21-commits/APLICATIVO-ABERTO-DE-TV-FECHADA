# 🚀 Guia Completo de Ativação do TV Stream App

## ✅ Pré-requisitos
- Conta no GitHub (já tem ✓)
- Conta no Render.com (gratuita)
- Android Studio instalado (opcional, para gerar APK)

---

## 📱 PASSO 1: Ativar GitHub Pages (Preview Web)

1. **Configure GitHub Pages:**
   - Vá para: https://github.com/rodriguuesrafael21-commits/APLICATIVO-ABERTO-DE-TV-FECHADA/settings/pages
   - Em "Source", selecione: `Deploy from a branch`
   - Branch: `main` (ou `master`)
   - Pasta: `/ (root)`
   - Clique em "Save"

2. **Aguarde 1-2 minutos** e acesse:
   ```
   https://rodriguuesrafael21-commits.github.io/APLICATIVO-ABERTO-DE-TV-FECHADA/
   ```

✅ **Seu app web estará online!**

---

## 🌐 PASSO 2: Deploy do Backend (Render)

### Opção A: Deploy Automático (Recomendado)

1. **Acesse:** https://render.com
2. **Sign up** com GitHub
3. **Autorize acesso** ao seu repositório
4. **Clique em:** "New +" → "Web Service"
5. **Selecione** seu repositório `APLICATIVO-ABERTO-DE-TV-FECHADA`
6. **Configure:**
   - **Name:** `tv-stream-backend`
   - **Runtime:** `Node`
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `node index.js`
   - **Plan:** Gratuito (ou Premium se quiser)
7. **Clique em:** "Deploy"
8. **Aguarde** ~3 minutos

### Resultado:
```
Backend URL: https://tv-stream-backend.onrender.com
```

### Opção B: Deploy Manual (Vercel/Railway/Fly)
- **Vercel:** https://vercel.com → Import Project → Selecione repo
- **Railway:** https://railway.app → New Project → GitHub repo
- **Fly:** https://fly.io → Autenticação GitHub

---

## 📦 PASSO 3: Gerar APK Android

### Método 1: Android Studio (Mais Fácil)

1. **Instale Android Studio:** https://developer.android.com/studio
2. **Abra o Android Studio**
3. **File** → **Open** → Selecione a pasta `android-app/`
4. **Espere o Gradle sincronizar** (pode levar 5 minutos)
5. **Edite `android-app/build.gradle`:**
   ```gradle
   android {
       compileSdk 34
       
       defaultConfig {
           applicationId "com.tvstream.app"
           minSdk 24
           targetSdk 34
           versionCode 1
           versionName "1.0.0"
       }
   }
   ```
6. **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
7. **Aguarde a compilação** (5-10 minutos)
8. **Localize o APK:** `android-app/app/build/outputs/apk/debug/app-debug.apk`

### Método 2: Linha de Comando (Gradle)

```bash
cd android-app
./gradlew assembleDebug
# O APK será gerado em: app/build/outputs/apk/debug/app-debug.apk
```

### Resultado:
```
APK pronto: app-debug.apk (~50 MB)
```

---

## 📲 PASSO 4: Instalar APK no Celular

### Opção A: USB (Recomendado)

1. **Ative o modo desenvolvedor:**
   - Vá a: Configurações → Sobre o telefone
   - Toque 7 vezes em "Número da compilação"
   - Vá em: Configurações → Opções do desenvolvedor → USB Debug ON

2. **Conecte o celular ao PC via USB**

3. **Execute:**
   ```bash
   adb install app/build/outputs/apk/debug/app-debug.apk
   ```

### Opção B: QR Code / Download Direto

1. **Coloque o APK num servidor** (Google Drive, GitHub Releases)
2. **Abra no celular** e baixe
3. **Instale** (pode pedir: Configurações → Segurança → Permitir fontes desconhecidas)

### Opção C: Emulador Android

```bash
# Listar emuladores disponíveis
adb devices

# Instalar no emulador
adb -s <emulator-id> install app-debug.apk
```

---

## 🔗 URLs Finais de Seu App

| Componente | URL |
|-----------|-----|
| **Preview Web** | `https://rodriguuesrafael21-commits.github.io/APLICATIVO-ABERTO-DE-TV-FECHADA/` |
| **Backend API** | `https://tv-stream-backend.onrender.com` |
| **APK Download** | `GitHub Releases ou Google Drive` |

---

## ⚙️ Configurar Backend no App

1. **Abra `android-app/src/main/AndroidManifest.xml`**
2. **Adicione a URL do backend:**
   ```xml
   <application>
       <meta-data
           android:name="backend_url"
           android:value="https://tv-stream-backend.onrender.com" />
   </application>
   ```

3. **Ou no código Kotlin (`MainActivity.kt`):**
   ```kotlin
   val backendUrl = "https://tv-stream-backend.onrender.com"
   ```

---

## ✅ Checklist Final

- [ ] GitHub Pages ativo (preview.html acessível)
- [ ] Backend rodando no Render (URL ativa)
- [ ] APK gerado e testado
- [ ] APK instalado no celular
- [ ] App funcionando!

---

## 🆘 Troubleshooting

### Preview web não abre?
- Verifique se GitHub Pages está ativo em Settings
- Aguarde 5 minutos após ativar
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Backend não conecta?
- Acesse: `https://tv-stream-backend.onrender.com/health` (se implementado)
- Verifique logs no Render: Vá em seu serviço → Logs
- Verifique se `backend/index.js` existe

### APK não instala?
- Confirme que é Android 7.0+ (API 24+)
- Ative "Instalar de fontes desconhecidas" nas Configurações
- Verifique espaço disponível (mínimo 100 MB)

---

## 📚 Próximas Melhorias

1. **Publicar na Play Store:**
   - Gerar APK assinado
   - Criar conta de desenvolvedor Google (~$25 uma vez)
   - Upload e revisão (~4 horas)

2. **CI/CD Automático:**
   - GitHub Actions para build automático do APK
   - Deploy automático a cada push

3. **Notificações Push:**
   - Firebase Cloud Messaging
   - Alertas de novos canais

---

## 📞 Suporte

- Dúvidas sobre Android: https://developer.android.com/docs
- Render: https://render.com/docs
- GitHub Pages: https://docs.github.com/en/pages

**Seu app está pronto para usar! 🎉**