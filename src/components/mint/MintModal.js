import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useWeb3ExecuteFunction } from "react-moralis";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import close from '../../../assets/icons/x.png'
import { DAPP_ABI, DAPP_ADDRESS } from "../../../contractConfig";
import useScaNUSTokens from "../../../misc/hooks/useScaNUSTokens";

export default function MintModal(props) {
	const [isSuccess, setIsSuccess] = useState(undefined)
	const navigation = useNavigation()
	// TRY useApiContract() hook from hooks folder to minimise
	const { fetch, error, data } = useWeb3ExecuteFunction()
	const makeOptions = (tokenId) => ({
		abi: DAPP_ABI,
		contractAddress: DAPP_ADDRESS,
		functionName: 'withdraw',
		params: ({
			_id: tokenId
		})
	})
	const { addToken } = useScaNUSTokens()
	const mint = () => {
		if (props.token) {
			fetch({ params: makeOptions(props.token.tokenId)})
		}
	}
	useEffect(() => {
		if (data) {
			addToken(props.token.tokenId)
			setIsSuccess(true)
		}
		else if (error) setIsSuccess(false)
		else setIsSuccess(undefined)
	}, [data, error])
	const backHome = () => {
		setIsSuccess(undefined)
		props.close()
		navigation.goBack()
	}
	return (
		<Modal visible={!!props.token} transparent={true} onRequestClose={props.close}>
			{
				props.token && (
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
						<View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10 }}>
							<View style={{ display: 'flex', padding: 30, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
								<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{ isSuccess === undefined ? 'Mint Token' : isSuccess ? 'Success!' : 'Failed :('}</Text>
								<TouchableOpacity onPress={() => { setIsSuccess(undefined); props.close(); }}>
									<Image source={close} style={{ width: 30, height: 30 }}/>
								</TouchableOpacity>
							</View>
							<View style={{ padding: 30, paddingTop: 10 }}>
								{isSuccess === undefined ? (
									<Text style={{ color: '#000', fontSize: 18, lineHeight: 18*1.618 }}>You found a new token! You are now able to mint <Text style={{ color: '#000', fontWeight: 'bold' }}>{props.token.name}</Text></Text>
								) : isSuccess ? (
									<Text style={{ color: '#000', fontSize: 18, lineHeight: 18*1.618 }}>You have successfully minted <Text style={{ color: '#000', fontWeight: 'bold' }}>{props.token.name}</Text></Text>
								) : (
									<Text style={{ color: '#000', fontSize: 18, lineHeight: 18*1.618 }}>There was an error while minting <Text style={{ color: '#000', fontWeight: 'bold' }}>{props.token.name}</Text></Text>
								)}
								<TouchableOpacity onPress={isSuccess ? backHome : mint} activeOpacity={0.8} style={{ backgroundColor: isSuccess === undefined ? '#364378' : isSuccess ? '#27ae60' : '#c0392b', padding: 12, marginTop: 24, alignItems: 'center', width: 160, borderRadius: 12 }}>
									<Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{ isSuccess === undefined ? 'Mint!' : isSuccess ? 'Back Home' : 'Try Again' }</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)
			}
		</Modal>
	)
}