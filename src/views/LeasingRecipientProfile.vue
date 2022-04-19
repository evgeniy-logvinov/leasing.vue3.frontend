<script setup lang="ts">
  import { onMounted, ref, defineEmits } from 'vue'
  import {
    ElInput,
    ElOption,
    ElSelect,
    ElRow,
    ElCol,
    ElButton,
  } from 'element-plus'
  import { companyProfileService } from '~/services'
  import { useI18n } from 'vue-i18n'
  import { CompanyProfile } from '~/types'
  // TODO: debounce for description
  // Check if form not empty than ask before leave page

  const { t } = useI18n()
  const companyProfile = ref<CompanyProfile>()
  const emit = defineEmits<{
    (e: 'download'): void
    (e: 'upload'): void
    (e: 'send'): void
  }>()

  const getCompanyProfile = async () => {
    companyProfile.value = await companyProfileService.getCompanyProfile()
  }

  onMounted(async () => await getCompanyProfile())
</script>

<template>
  <template v-if="!companyProfile">Loading</template>
  <template v-else>
    <el-row>
      <el-col>
        <div>{{ t('fullName') }}</div>
        <el-input v-model="companyProfile.fullName" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('shortName') }}</div>
        <el-input v-model="companyProfile.shortName" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('generalManager') }}</div>
        <div>{{ t('firstName') }}</div>
        <el-input v-model="companyProfile.generalManager.firstName" />
        <div>{{ t('lastName') }}</div>
        <el-input v-model="companyProfile.generalManager.lastName" />
        <div>{{ t('patronymic') }}</div>
        <el-input v-model="companyProfile.generalManager.patronymic" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('generalAccountant') }}</div>
        <div>{{ t('firstName') }}</div>
        <el-input v-model="companyProfile.generalAccountant.firstName" />
        <div>{{ t('lastName') }}</div>
        <el-input v-model="companyProfile.generalAccountant.lastName" />
        <div>{{ t('patronymic') }}</div>
        <el-input v-model="companyProfile.generalAccountant.patronymic" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('legalAddress') }}</div>
        <div>{{ t('index') }}</div>
        <el-input v-model="companyProfile.legalAddress.index" />
        <div>{{ t('region') }}</div>
        <el-input v-model="companyProfile.legalAddress.region" />
        <div>{{ t('city') }}</div>
        <el-input v-model="companyProfile.legalAddress.city" />
        <div>{{ t('district') }}</div>
        <el-input v-model="companyProfile.legalAddress.district" />
        <div>{{ t('street') }}</div>
        <el-input v-model="companyProfile.legalAddress.street" />
        <div>{{ t('building') }}</div>
        <el-input v-model="companyProfile.legalAddress.building" />
        <div>{{ t('corpus') }}</div>
        <el-input v-model="companyProfile.legalAddress.corpus" />
        <div>{{ t('officeNumber') }}</div>
        <el-input v-model="companyProfile.legalAddress.officeNumber" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('postAddress') }}</div>
        <div>{{ t('index') }}</div>
        <el-input v-model="companyProfile.postAddress.index" />
        <div>{{ t('region') }}</div>
        <el-input v-model="companyProfile.postAddress.region" />
        <div>{{ t('city') }}</div>
        <el-input v-model="companyProfile.postAddress.city" />
        <div>{{ t('district') }}</div>
        <el-input v-model="companyProfile.postAddress.district" />
        <div>{{ t('street') }}</div>
        <el-input v-model="companyProfile.postAddress.street" />
        <div>{{ t('building') }}</div>
        <el-input v-model="companyProfile.postAddress.building" />
        <div>{{ t('corpus') }}</div>
        <el-input v-model="companyProfile.postAddress.corpus" />
        <div>{{ t('officeNumber') }}</div>
        <el-input v-model="companyProfile.postAddress.officeNumber" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('inn') }}</div>
        <el-input v-model="companyProfile.inn" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('ogrn') }}</div>
        <el-input v-model="companyProfile.ogrn" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('okpo') }}</div>
        <el-input v-model="companyProfile.okpo" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('kpp') }}</div>
        <el-input v-model="companyProfile.kpp" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('paymentAccount') }}</div>
        <el-input v-model="companyProfile.paymentAccount" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('fullBankName') }}</div>
        <el-input v-model="companyProfile.fullBankName" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('correspondentAccountBank') }}</div>
        <el-input v-model="companyProfile.correspondentAccountBank" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('bik') }}</div>
        <el-input v-model="companyProfile.bik" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('mobilePhone') }}</div>
        <el-input v-model="companyProfile.mobilePhone" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('email') }}</div>
        <el-input v-model="companyProfile.email" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>{{ t('taxationSystem') }}</div>
        <!-- TODO: change to select -->
        <el-select
          v-model="companyProfile.taxationSystem"
          class="m-2"
          :placeholder="t('select')"
          size="large"
        >
          <el-option key="OSN" :label="t('osn')" value="OSN" />
          <el-option key="USN" :label="t('usn')" value="USN" />
        </el-select>
      </el-col>
    </el-row>
    <el-row
      ><el-col>
        <el-button
          key="downloadAgreement"
          size="small"
          @click="emit('download')"
          >{{ t('downloadAgreement') }}</el-button
        >
      </el-col></el-row
    >
    <el-row
      ><el-col>
        <el-button key="uploadAgreement" size="small" @click="emit('upload')">{{
          t('uploadAgreement')
        }}</el-button>
      </el-col></el-row
    >
    <el-row
      ><el-col>
        <el-button key="sendAgreement" size="small" @click="emit('send')">{{
          t('sendAgreement')
        }}</el-button>
      </el-col></el-row
    >
  </template>
</template>
