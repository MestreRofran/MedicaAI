# MedicaAI 🩺

**Sua saúde organizada, no seu ritmo.**

O MedicaAI é uma agenda pessoal de saúde criada para ajudar você a acompanhar consultas, tratamentos e horários de remédios em um só lugar. Ele também permite organizar registros de diferentes pessoas da família, mantendo o histórico de cada uma separado.

O aplicativo foi pensado para ser simples: funciona sem cadastro obrigatório, oferece uma visão clara das próximas atividades e permite consultar informações antigas sempre que precisar.

## O que você pode fazer

- **Acompanhar consultas:** anote data, horário, profissional e local de atendimento. Depois, registre se a consulta foi concluída, cancelada ou reagendada, mantendo seu histórico.
- **Organizar remédios:** informe os períodos de tratamento, dosagens e horários. Registre as doses tomadas, adiadas ou não tomadas.
- **Consultar o calendário:** visualize as atividades de cada dia e adicione novos compromissos ou tratamentos.
- **Ter vários perfis:** acompanhe diferentes pessoas com nomes e emojis personalizados.
- **Guardar informações úteis:** cadastre médicos, clínicas, hospitais e especialidades para reutilizar nos registros.
- **Rever seu histórico:** encontre acontecimentos anteriores e registros de tratamentos.
- **Personalizar o visual:** escolha entre estilo novo e clássico, tema claro ou escuro, organização das telas e posição dos botões.
- **Guardar seus dados:** exporte arquivos de segurança ou, opcionalmente, entre em uma conta para enviar um backup criptografado à nuvem.

## Como funciona

Ao abrir o MedicaAI, você encontra a tela **Início**, com as consultas próximas e os remédios programados. O botão **+** permite adicionar rapidamente um novo compromisso ou tratamento.

A tela **Cadastros** organiza profissionais de saúde, remédios, estabelecimentos, pessoas e especialidades. Na área **Configurações**, você escolhe a aparência, a navegação e outros detalhes do aplicativo.

Na tela **Conexão**, você pode continuar utilizando o MedicaAI apenas neste dispositivo ou entrar com sua conta Google ou e-mail para acessar os recursos de backup na nuvem. As cópias na nuvem são **manuais** nesta versão: entrar na conta não envia os registros automaticamente.

Os dados locais ficam guardados no navegador do dispositivo. Portanto, recomendamos exportar cópias de segurança periodicamente; apagar os dados do navegador pode remover seus registros.

## Instalável, sem complicação

O MedicaAI é um **aplicativo web progressivo (PWA)**. Isso significa que ele pode ser usado diretamente no navegador ou instalado na tela inicial de celulares e computadores compatíveis. Depois da primeira visita, a interface pode abrir mesmo sem internet. Para entrar na conta ou enviar e recuperar backups da nuvem, é preciso estar conectado.

**Importante:** os lembretes desta versão dependem do navegador e não são garantidos quando o aplicativo está fechado ou suspenso. Não use o MedicaAI como seu único meio de lembrar horários de medicamentos.

## Como foi desenvolvido

O projeto foi criado como uma aplicação web responsiva, buscando combinar uma interface acessível com recursos úteis no dia a dia. Sua construção utiliza:

- **HTML5** para a estrutura das telas;
- **CSS3** para a aparência e adaptação a diferentes tamanhos de tela;
- **JavaScript** para cadastro, navegação, calendário, registros e armazenamento local;
- **Recursos PWA** para instalação e acesso à interface sem internet;
- **Firebase Authentication e Cloud Firestore**, de maneira opcional, para conectar contas e armazenar backups criptografados.

O MedicaAI foi pensado para funcionar em navegadores modernos e permitir personalizações por dispositivo, sem exigir login para as funções principais.

## Privacidade e atenção à saúde

Os registros locais não são criptografados nesta versão. As cópias enviadas à nuvem são criptografadas antes do envio e requerem uma senha de proteção escolhida pela própria pessoa. Essa senha **não é recuperável** pelo aplicativo.

O MedicaAI é uma ferramenta de organização e registro pessoal. **Ele não oferece diagnóstico, não substitui orientações médicas e não deve ser usado para decidir alterar doses ou tratamentos.**

Leia também o documento [Privacidade e cuidados com os dados](PRIVACIDADE.md).

---

**MedicaAI — organize seus cuidados e preserve sua história de saúde.**
